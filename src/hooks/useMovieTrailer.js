import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../components/utility/moviesSlice";
import { useEffect } from "react";
import { Movie_API } from "../components/utility/constant";


const useMovieTrailer = (movieId)=>{
  const movieTrailer = useSelector(store=>store.movies.trailerVideo)
  // console.log(movieId);
    const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos",
      Movie_API
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((e) => e.type == "Trailer");
    // console.log(filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    
    dispatch(addTrailerVideo(trailer));
    // // console.log(trailer);
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();console.log(movieTrailer);
  }, []);
};

export default useMovieTrailer