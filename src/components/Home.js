import React, { Fragment } from 'react';



// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Component
import HeroImage from './HeroImage';
import Grid from './grid'
import Thumb from './Thumb'
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
import Footer from './Footer';

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

    console.log(state);

    if (error) return <div>Something went wrong...</div>

    return (
        <Fragment>


        { !searchTerm && state.results[1] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`} 
                                title={state.results[1].original_title} text={state.results[1].overview} rating={state.results[1].vote_average} year={state.results[7].release_date} /> : null}
        
        
        <SearchBar setSearchTerm={setSearchTerm} />



        <Grid header={ searchTerm ? 'Search Result' :'Popular Movies'}>
            {state ? state.results.map(movie=>(
                <Thumb key={movie.id} clickable={true} 
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id} name={movie.title}></Thumb>
            )) : null }
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (<Button text="Load More" callback={()=> setIsLoadingMore(true)} />)}

        <Footer />

        </Fragment>
    
    );
} 

export default Home;