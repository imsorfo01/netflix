import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

export default function MainContainer() {
    const movies= useSelector(store=>store.movies?.nowPlayingmovies)
    // console.log(movies);
    if(!movies) return ;

    const mainMovie = movies[1]
    const {id}=mainMovie;
  return (
    <div className='md:w-screen w-screen'> 
      <VideoTitle movie={mainMovie}/>
      <VideoBackground movieId={id} />
      
    </div>
  );
}
