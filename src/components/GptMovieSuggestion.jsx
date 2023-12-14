import React from 'react';
import { useSelector } from 'react-redux';
import MovieCrad from './MovieCrad';
import SuggestedMovieCard from './SuggestedMovieCard';

export default function GptMovieSuggestion() {
 const suggMovieList = useSelector(store=>store.movies.suggestedMovie)
 const suggMovieName = useSelector(store=>store.movies.SuggestedMovieName)
 if (!suggMovieList) return null;

  return (
    <div className=' md:m-6 m-3'>
      <SuggestedMovieCard movies={suggMovieList} moviesName={suggMovieName}/>
    </div>
  );
}
