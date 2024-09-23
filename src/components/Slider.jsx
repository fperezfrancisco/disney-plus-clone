import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
const image_base_url = "https://image.tmdb.org/t/p";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SliderImg from "./SliderImg";

function Slider({ setSlider }) {
  const [movieList, setMovieList] = useState([]);

  const [img, setImg] = useState();

  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    setTimeout(() => {
      getTrendingMovies();
    }, 5000);
  }, [movieList]);

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
        {movieList.length > 0 ? (
          movieList.map((item) => (
            <SliderImg
              imgPath={item.backdrop_path}
              baseURL={image_base_url}
              itemId={item.id}
              key={item.id}
            />
          ))
        ) : (
          <div className="flex w-full bg-gray-500 h-full min-h-[500px] rounded animate-pulse"></div>
        )}
      </div>
    </>
  );
}

export default Slider;
