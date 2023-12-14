import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supportedLang } from './utility/langConstant';
import { useRef } from 'react';
import openai from './utility/openAi';
import { useState } from 'react';
import { Movie_API } from './utility/constant';
import { addSuggestedMovie, addSuggestedMovieName } from './utility/moviesSlice';

export default function GptSearch() {
  // console.log("this is me ");
  const dispatch = useDispatch();
  const suggestedMovieList = useSelector(store=>store.movies.suggestedMovie)
  const searchGptInput = useRef(null)
  const langSelector = useSelector(store=>store.lang.changeLangState)
  const [suggestedMovie, setsuggestedMovie] = useState(null);

  
 
  const movieSearch = async(movie)=>{
       const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",Movie_API)
       const json = await data.json()
       return json
  }
  // if (!suggestedMovieList) return ;

  const searchGptClickHandler = async()=>{
    
    const gptQuerry = "Act as a movie recommendation system and suggest some movies for the querry : " + searchGptInput.current.value + ". only give me name of five movies, comma separated like the example result given ahead . example result : gadar, don, sholay, koi mil gaya, jawaan"
    
    const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuerry }],
    model: 'gpt-3.5-turbo',
  });
  // console.log(gptResults.choices);
  setsuggestedMovie(gptResults.choices[0].message.content)

  
  const movieList = gptResults?.choices[0]?.message?.content?.split(",")
  

 const promiseTmdbMovieList =  movieList.map((movie)=>movieSearch(movie))
 const tmdbResult = await Promise.all(promiseTmdbMovieList);
 dispatch(addSuggestedMovie(tmdbResult))
 dispatch(addSuggestedMovieName(movieList))

    }
  

  return (
    <>
    
     <div className='  md:pt-[2%] pt-[4%] md:flex flex md:justify-center justify-center'>
      
      <form onSubmit={((e)=>e.preventDefault())} className='md:w-1/2 w-10/12 m-auto bg-black  md:grid grid md:grid-cols-12 grid-cols-12'>
        <input  ref={searchGptInput} className='md:outline-none outline-none md:font-bold font-semibold md:col-span-9 col-span-9 md:p-4 md:m-4 m-3 px-5 mx-4' type="text" placeholder={supportedLang[langSelector].searchPlaceholder}/>
        <button onClick={searchGptClickHandler} className= 'md:rounded-lg rounded-lg md:col-span-3 py-2 md:text-white text-white md:text-2xl bg-red-600 text-sm  md:p-4 md:px-4 md:m-4 md:hover:opacity-80 md:cursor-pointer cursor-pointer mx-2 my-5 w-fit px-2' >{supportedLang[langSelector].search}</button>
        
      </form>

      </div>
     <div className=' flex justify-center'>
        {/* {suggestedMovie && <p className=' w-fit text-xl text-white font-bold p-1 bg-black mt-1 rounded-lg'><span className='mr-2 text-red-700  underline text-2xl'>Suggested Movies : </span> {suggestedMovie}</p>} */}
      </div>  
      
    </>
  );
}
