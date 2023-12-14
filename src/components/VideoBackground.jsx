import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


export default function VideoBackground({ movieId }) {
  // console.log(movieId);
  
  const trailerInfo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId)
  

  return (
    <div className="md:w-screen w-screen mt-12 md:mt-0  ">
      <iframe
        className="md:w-full w-full  md:h-[12%] h-[400px] md:aspect-video aspect-auto"
        src={"https://www.youtube.com/embed/"+trailerInfo?.key+"?si=CK1tMC8ukOgXJPtp&autoplay=1&mute=1"}
        // &autoplay=1&mute=1
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowFullScreen
        
      ></iframe>
    </div>
  );
}
