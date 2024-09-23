import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MoviePage from "./Pages/MoviePage";

function App() {
  const [count, setCount] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);

  return (
    <>
      <BrowserRouter basename="/disney-plus-clone">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movie/:id" index element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
