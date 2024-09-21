import React, { useEffect, useState } from "react";

function SliderImg({ imgPath, baseURL }) {
  const [sliderImg, setSliderImg] = useState();

  return (
    <img
      src={baseURL + "/original/" + imgPath}
      className="min-w-full w-full  lg:w-full md:h-fit lg:max-h-[550px] object-cover object-left-top lg:object-top-center mr-5 rounded-md lg:max-w-[1200px]  hover:border-[4px] border-gray-400 transition-all duration-200 ease-in-out"
    />
  );
}

export default SliderImg;
