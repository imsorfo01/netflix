import React from "react";
import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchGptPage from "./SearchGptPage";
import { useSelector } from "react-redux";

export default function Browse() {
  const showGpt = useSelector((store) => store.gpt.gptPageState);
 
  useNowplayingMovies();
  return (
    <div>
      <Header />
      {showGpt ? (
        <SearchGptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}
