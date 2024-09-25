import React from "react";
import GenreMovieList from "../components/GenreMovieList";
import ProductionHouse from "../components/ProductionHouse";
import Slider from "../components/Slider";
import Header from "../components/Header";

function Home({ user }) {
  return (
    <div>
      <Header user={user} />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default Home;
