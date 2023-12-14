import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../components/utility/moviesSlice"
import {movie_Link,Movie_API} from "../components/utility/constant"
import { useEffect } from 'react';


const useNowplayingMovies=()=>{
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingmovies)
    const dispatch = useDispatch()
  const getMovies= async()=>{
    const data= await fetch(movie_Link,Movie_API)
    const json = await data.json()
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(() => {
    !nowPlayingMovies && getMovies()
    
  }, []);
}
export default useNowplayingMovies;