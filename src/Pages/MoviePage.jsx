import React, { useEffect, useState } from "react";
import GenreMovieList from "../components/GenreMovieList";
import { useParams } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import SimilarMovieList from "../components/SimilarMovieList";
import RecommendedMovieList from "../components/RecommendedMovieList";
import Header from "../components/Header";
const image_base_url = "https://image.tmdb.org/t/p/original";

function MoviePage({ user, watchList, setWatchList }) {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [movie, setMovie] = useState();

  const getMovie = () => {
    GlobalApi.getMovieDetails(id).then((resp) => {
      console.log(resp.data);
      setMovie(resp.data);
    });
  };

  const handleWatchlistClick = () => {
    console.log(movie);
    console.log(id);
    const newWatchList = [...watchList];
    console.log(newWatchList);
    newWatchList.push(movie);
    setWatchList(newWatchList);
    alert("Movie added to watchlist!");
  };

  useEffect(() => {
    getMovie();

    /*
    if (movie) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }*/
  }, [id]);

  return (
    <div>
      <Header user={user} />
      <section className="w-full min-w-full min-h-[600px] h-full mb-4 flex flex-col relative md:p-8 md:pt-2">
        <div className="movieBanner overflow-hidden relative w-full min-w-[300px] min-h-[500px] h-full md:max-h-[700px] md:min-h-[700px] flex flex-col-reverse bg-[rgba(19, 21, 32, 1)] md:rounded-lg">
          {movie ? (
            <>
              <div
                className="overlay absolute m-auto w-full-h-full z-10 top-0 right-0 left-0 bottom-0 hidden md:block"
                id="movieOverlay"
              ></div>
              <div className="movieCopy p-8 flex flex-col items-start z-30 ml-0 mr-0 mt-auto mb-auto">
                <h1 className="text-[3rem] leading-[1.25] mb-8">
                  {movie && movie.title}
                </h1>
                <div className="movieDescription flex flex-wrap gap-4 mt-2 mb-4">
                  <p className="text-sm font-medium">
                    {movie && movie.release_date}
                  </p>
                  <p className="text-sm font-medium">
                    {movie && movie.runtime} minutes
                  </p>
                  <p className="text-sm font-medium capitalize">
                    Original Languae: {movie && movie.original_language}
                  </p>
                  <p className="text-sm font-medium">
                    Popularity Rating: {movie && movie.vote_average}
                  </p>
                </div>
                <p className="sectionPara flex w-full max-w-full md:max-w-[700px]">
                  {movie.overview}
                </p>
                <div className="flex flex-row w-full items-center content-center justify-start gap-3 my-8">
                  <button className="p-4 text-white cursor-not-allowed bg-blue-800 rounded-lg font-medium text-sm pl-8 pr-8 flex items-center gap-2">
                    <i class="bx bx-play-circle text-[1.5rem]"></i> Play
                    Selection
                  </button>
                  <button
                    className="p-4 border-blue-800 border-[2px] text-blue-400 hover:bg-slate-700 rounded-md text-sm px-8 "
                    onClick={handleWatchlistClick}
                  >
                    Add to watchlist
                  </button>
                </div>
              </div>
              <div className="movieBackground flex md:absolute w-full h-full z-5 top-0 bottom-0 right-0 left-0 object-cover">
                <img
                  src={image_base_url + movie.backdrop_path}
                  alt="movie background poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <div className="skeleton bg-gray-500 absolute top-0 left-0 right-0 bottom-0 animate-pulse w-full h-full"></div>
          )}
        </div>
      </section>
      <RecommendedMovieList movieID={id} />
      <SimilarMovieList movieID={id} />
      <GenreMovieList />
    </div>
  );
}

export default MoviePage;
