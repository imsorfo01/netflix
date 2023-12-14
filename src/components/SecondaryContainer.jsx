import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

export default function SecondaryContainer() {
  const movie = useSelector(store=>store?.movies.nowPlayingmovies);
  // console.log(movie[0]);

  return (
    <div className=' bg-black'>
      {/* movielist-trending
        -n.moviecard 
        movielist-horror
        -n.moviecard
        movielist-comedy
        -n.moviecard*/}
       <div className=' -mt-24 relative z-10'>
         <MovieList title={"Now Playing"} movie={movie}/>
        <MovieList title={"trending"} movie={movie}/>
        <MovieList title={"Popular"} movie={movie}/>
        <MovieList title={"Horror"} movie={movie}/>
       </div>
        
    </div>
  );
}
