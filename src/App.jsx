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
import { auth, db } from "./firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import {
  query,
  collection,
  where,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const [user, setUser] = useState();
  const [currWatchList, setCurrWatchList] = useState([]);
  const [watchListId, setWatchListId] = useState();

  async function getWatchlistByUid(uid) {
    const watchlistCollectionRef = await query(
      collection(db, "watchlists"),
      where("uid", "==", uid)
    );
    const data = await getDocs(watchlistCollectionRef);
    const userWatchList = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(userWatchList);
    setWatchListId(userWatchList[0].id);
    console.log(watchListId);
    setCurrWatchList(userWatchList[0].watchlist);
  }

  async function updateWatchlist(id) {
    const docRef = doc(db, "watchlists", id);
    const newList = { uid: user.uid, watchlist: currWatchList };
    console.log(newList);
    await updateDoc(docRef, newList);
  }

  useEffect(() => {
    console.log(user);
    if (user) {
      console.log("New user logged in!");
      //we want to grab/read the new user's watchlist
      getWatchlistByUid(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (currWatchList) {
      console.log(currWatchList);
      //we want to update the user's watchlist
      if (watchListId) {
        updateWatchlist(watchListId);
      }
    }
  }, [currWatchList]);

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
          <Route
            path="/movie/:id"
            element={
              <MoviePage
                user={user}
                watchList={currWatchList}
                setWatchList={setCurrWatchList}
              />
            }
          />
          <Route
            path="/registration"
            exact
            element={<RegisterHome user={user} setUser={setUser} />}
          />
          <Route
            path="/userprofile"
            element={
              <UserProfile
                user={user}
                setUser={setUser}
                watchList={currWatchList}
                setWatchList={setCurrWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
