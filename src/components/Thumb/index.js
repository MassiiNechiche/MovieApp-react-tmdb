import React from 'react';
import { Link } from 'react-router-dom';

// styles
import { Image, MovieTitle } from './Thumb.styles';

const thumb = ({image, movieId, clickable, name}) => (

    <div>
    {clickable ? (
        <Link to={`/${movieId}`}  style={{ textDecoration: 'none' }}> <Image src={image} alt='movie-thumb' /> <MovieTitle> {name} </MovieTitle> </Link>
      
    ) : (
        <Image src={image} alt='movie-thumb' />
    ) }
        
    </div>
)
   


export default thumb;