import { useEffect, useState } from "react";
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
import RegisterHome from "./Pages/RegisterHome";
import UserProfile from "./Pages/UserProfile";
import { auth } from "./firebase/init";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [count, setCount] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(user);
    if (user) {
      console.log("New user logged in!");
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("A user is still logged in!");
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter basename="/disney-plus-clone">
        <Routes>
          <Route path="/" index element={<Home user={user} />} />
          <Route path="/movie/:id" element={<MoviePage user={user} />} />
          <Route
            path="/registration"
            exact
            element={<RegisterHome user={user} setUser={setUser} />}
          />
          <Route
            path="/userprofile"
            element={<UserProfile user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
