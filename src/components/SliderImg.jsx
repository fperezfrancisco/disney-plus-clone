import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SliderImg({ imgPath, baseURL, itemId }) {
  const [sliderImg, setSliderImg] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${itemId}`);
  };

  return (
    <img
      onClick={handleClick}
      src={baseURL + "/original/" + imgPath}
      className="cursor-pointer min-w-full w-full  lg:w-full md:h-fit lg:max-h-[550px] object-cover object-left-top lg:object-top-center mr-5 rounded-md lg:max-w-[1200px]  hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
    />
  );
}

export default SliderImg;
