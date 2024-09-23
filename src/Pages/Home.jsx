import React from "react";
import GenreMovieList from "../components/GenreMovieList";
import ProductionHouse from "../components/ProductionHouse";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default Home;
