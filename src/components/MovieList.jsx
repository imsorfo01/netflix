import React from 'react';
import MovieCrad from './MovieCrad';

export default function MovieList({title,movie}) {
  // console.log(title,movie);
  if (movie==null) return;
  return (
    <div className='mb-5 bg-black'>
      <div>
        <h1 className='font-bold text-2xl my-1 mx-6 text-white'>{title}</h1>
        <div className='w-full overflow-x-scroll no-scrollbar'>
          <MovieCrad movie={movie}/>
        </div>
      </div>
      
    </div>
  );
}
