import React, { useEffect, useState } from "react";
const image_base_url = "https://image.tmdb.org/t/p/original";

function LargeMovieCard({ movie }) {
  const imageUrl = image_base_url + movie.backdrop_path;
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
    <section className="hover:scale-110 transition-all duration-150 ease-in-out">
      {img ? (
        <img
          src={image_base_url + movie.backdrop_path}
          className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer"
        />
      ) : (
        <div className="block w-[110px] h-full md:w-full md:min-w-[260px] md:max-h-[160px] rounded-lg md:h-[400px] bg-gray-500 animate-pulse"></div>
      )}

      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}

export default LargeMovieCard;
