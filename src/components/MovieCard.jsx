import React, { useEffect, useState } from "react";
const image_base_url = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const imageUrl = image_base_url + movie.poster_path;
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 1000);
    };
  }, []);

  return (
    <>
      {img ? (
        <img
          src={image_base_url + movie.poster_path}
          className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"
        />
      ) : (
        <div className="block w-[110px] h-[100px] md:w-full md:min-w-[250px] rounded-lg md:h-[400px] bg-gray-500 animate-pulse"></div>
      )}
    </>
  );
}

export default MovieCard;
