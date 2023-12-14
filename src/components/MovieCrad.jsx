import React from 'react';
import { movie_Thumbnail } from './utility/constant';

export default function MovieCrad({movie}) {
  // console.log(movie);
  
  return (
    <div className='md:w-48  md:flex  flex md:ml-5 md:mb-3 md:mt-6 mt-6'>
      {movie.map((e)=>
        <img key={e.id} className=' md:w-48 w-36 rounded-lg mx-2 md:h-52 h-36 md:hover:h-64 md:hover:w-52 ' src={movie_Thumbnail+e.poster_path} alt="movie_Thumbnail" />
     )}
    </div>
  );
}
