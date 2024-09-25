import React, { useState } from "react";
import Header from "../components/Header";
import { auth } from "../firebase/init";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Watchlist from "../components/Watchlist";

function UserProfile({ user, setUser, watchList, setWatchList }) {
  const navigate = useNavigate();

  const [userWatchlist, setUserWatchlist] = useState(watchList);

  const handleSignOut = () => {
    console.log("User wants sign out");
    signOut(auth)
      .then(() => {
        setUser(null);
        setUserWatchlist([]);
        setWatchList([]);
        alert("User signed out!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = () => {
    navigate("/registration");
  };

  return (
    <div>
      <Header user={user} />
      <section className="w-full min-w-full min-h-full h-full mb-4 p-4 flex flex-col relative md:p-8 md:pt-2">
        <div className="userCopy flex w-full p-4 mt-0 flex-col items-start gap-4">
          <h1 className="usertitle text-white text-[2.5rem]">User Profile</h1>
          <h2 className="text-white text-[1.25rem] my-1">
            {user && user.email}
          </h2>
          {user ? (
            <button
              className="my-2 w-[200px] py-4 px-6 bg-teal-600 rounded-lg text-sm font-medium hover:bg-teal-500 text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="my-2 w-[200px] py-4 px-6 bg-teal-600 rounded-lg text-sm font-medium hover:bg-teal-500 text-white"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          )}
        </div>
      </section>
      <section className="w-full p-4 md:p-8 flex flex-col">
        <h2 className="text-white text-[1.75rem] px-4">My Watchlist</h2>
        <Watchlist watchList={userWatchlist} setWatchList={setWatchList} />
      </section>
    </div>
  );
}

export default UserProfile;
