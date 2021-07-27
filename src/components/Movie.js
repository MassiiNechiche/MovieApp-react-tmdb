import React, { Fragment } from 'react';
import { useParams  } from 'react-router';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
import Footer from './Footer';


// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'; 

// Image
import NoImage from '../images/no_image.jpg';



const Movie =()=> {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading)  return <Spinner />
    if (error)  return <div>Something went wrong...!</div>


    return (
        <Fragment>
            {/* <BreadCrumb movieTitle={movie.original_title}></BreadCrumb> */}
            <MovieInfo movie={movie} time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Cast'>
                {movie.actors.slice(0, 20).map(actor => (
                    <Actor key={actor.credit_id} name={actor.name} character={actor.character}
                     imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} />
                ))}
            </Grid>

            <Footer />

        </Fragment>
    )
}

export default Movie;