import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
const image_base_url = "https://image.tmdb.org/t/p";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  /**
   * 
   * {movieList.map((item) => (
        <img
          src={image_base_url + item.backdrop_path}
          className="min-w-full h-[310px]"
        />
      ))}
   * 
   */

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div className="hidden md:block">
        <HiChevronLeft
          className="text-white text-[30px] md:text-[60px] absolute mx-8 mt-[150px] lg:mt-[200px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="text-white text-[30px] md:text-[60px] absolute mx-8 mt-[150px] lg:mt-[200px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={image_base_url + "/original/" + item.backdrop_path}
            className="min-w-full w-full  lg:w-full md:h-fit lg:max-h-[550px] object-cover object-left-top lg:object-top-center mr-5 rounded-md lg:max-w-[1200px]  hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
