import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard.jsx";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function SimilarMovieList({ movieID }) {
  const elementRef = useRef(null);
  const [similarMovieList, setSimilarMovieList] = useState([]);

  const slideRigt = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const getSimilarMovies = () => {
    GlobalApi.getSimilarMovies(movieID).then((resp) => {
      console.log(resp.data.results);
      setSimilarMovieList(resp.data.results);
    });
  };

  useEffect(() => {
    getSimilarMovies();
  }, [movieID]);

  return (
    <div className="p-4 md:p-8 md:pl-10 md:pr-10">
      <h2 className="text-[20px] text-white font-bold">
        Top 10 Similar Movies
      </h2>
      <div className="relative scroll-smooth w-full p-4 md:p-8 md:pl-10 md:pr-10">
        <HiChevronLeft
          className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute top-[50%]`}
          onClick={() => slideLeft(elementRef.current)}
        />
        <div
          className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-10 scroll-smooth"
          ref={elementRef}
        >
          {similarMovieList.map((item, index) => (
            <>{index < 11 && <MovieCard movie={item} />}</>
          ))}
        </div>
        <HiChevronRight
          className={`text-white text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute right-0 top-[50%]`}
          onClick={() => slideRigt(elementRef.current)}
        />
      </div>
    </div>
  );
}

export default SimilarMovieList;
