import React from 'react';
import GptSearch from './GptSearch';
import GptMovieSuggestion from './GptMovieSuggestion';
import {backgroundImage} from "../components/utility/constant"


export default function SearchGptPage() {
  return (
    <div>
        <div className="md:fixed fixed md:-z-10 -z-10 ">
        <img className='  h-[840px]'
          src={backgroundImage}
          alt="background"
        />
      </div>
      {/* <GptSearch/> */}
      <GptSearch/>
      <GptMovieSuggestion/>
    </div>
  );
}
