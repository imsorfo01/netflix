import React from 'react';
import MovieCrad from './MovieCrad';

export default function SuggestedMovieCard({movies,moviesName}) {
    // console.log(movies);
  return (
    <div className='bg-black overflow-x-scroll no-scrollbar opacity-90 mt-5'>
      {movies.map((movieList,index)=><div><h1 className='text-white ml-6 absolute  py-1 -my-7 text-xl text-font-bold'>{moviesName[index]}</h1>
      <MovieCrad movie={movieList.results}/></div>)}
    </div>
  );
}
