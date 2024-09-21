import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi.jsx";
import MovieCard from "./MovieCard.jsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import LargeMovieCard from "./LargeMovieCard.jsx";

function MovieList({ genreId, indexMain }) {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenre();
  }, []);

  const getMovieByGenre = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      //console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRigt = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative scroll-smooth w-full">
      <HiChevronLeft
        className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute ${
          indexMain % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-10 scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <>
            {indexMain % 3 === 0 ? (
              <LargeMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <HiChevronRight
        className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute right-0 top-0 ${
          indexMain % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
        onClick={() => slideRigt(elementRef.current)}
      />
    </div>
  );
}

export default MovieList;
