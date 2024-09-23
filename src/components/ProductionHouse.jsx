import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/videos/star-wars-vid.mp4";
import disneyV from "./../assets/videos/disney-vid.mp4";
import marvelV from "./../assets/videos/marvel-vid.mp4";
import nationalGV from "./../assets/videos/national-geographic-vid.mp4";
import pixarV from "./../assets/videos/pixar-vid.mp4";

function ProductionHouse() {
  const productionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: pixar, video: pixarV },
    { id: 3, image: marvel, video: marvelV },
    { id: 4, image: nationalG, video: nationalGV },
    { id: 5, image: starwar, video: starwarV },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center flex-wrap w-full md:flex md:gap-5 md:flex-nowrap p-8 px-12 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 min-w-[60px] md:w-full md:max-w-full rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800">
          {" "}
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 round-md z-0 opacity-0  hover:opacity-50 w-full h-full"
          />
          <img src={item.image} className="w-full z-[1]" />{" "}
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
