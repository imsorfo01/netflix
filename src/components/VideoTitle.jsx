import React from 'react';

export default function VideoTitle({movie}) {
  const{original_title,overview}=movie
  return (
    <div className='md:absolute absolute md:text-white text-white md:bg-gradient-to-r bg-gradient-to-r md:from-black md:pt-36 pt-20 md:px-12 aspect-video md:pl-24 pl-3'>
      <h1 className='md:text-9xl text-2xl font-bold text-green-500 md:mb-2 mb-0'>{original_title}</h1>
      <p className='md:py-6 md:line-clamp-5 line-clamp-4 md:text-sm text-sm md:w-1/4 w-[100px]'>{overview}</p>
      <div className='mt-2'>
        <button className='md:bg-white bg-white md:text-black text-black md:px-3 px-2  md:py-2 py-1 md:rounded-md  rounded-md md:font-bold font-semibold md:hover:opacity-50'>🔘 Play</button>
        <button className='bg-white text-black md:px-3 px-2 md:py-2 py-1 md:rounded-md md:font-bold md:opacity-20 opacity-20 md:hover:opacity-50 md:ml-2 ml-1 rounded-lg'>More Info!</button>
      </div>
    </div>
  );
}
