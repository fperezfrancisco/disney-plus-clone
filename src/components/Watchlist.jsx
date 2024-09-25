import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import MovieCard from "./MovieCard";

function Watchlist({ user, watchList, setWatchList }) {
  const [updatedWatchlist, setUpdatedWatchlist] = useState(watchList);

  function handleRemove(movieId) {
    console.log("removing movie with id: " + movieId);
    const filteredList = updatedWatchlist.filter(
      (movie) => movie.id !== movieId
    );
    setWatchList(filteredList);
    setUpdatedWatchlist(filteredList);
  }

  useEffect(() => {
    console.log("Watchlist updated");
  }, [watchList]);

  return (
    <div className="w-full px-8 h-full min-h-full mt-4 flex flex-wrap gap-6">
      {updatedWatchlist.length > 0 ? (
        updatedWatchlist.map((movie) => (
          <div className="flex flex-col">
            <MovieCard movie={movie} />
            <div className="mt-4">
              <button
                className="bg-slate-700 hover:bg-red-700 w-full p-3 text-[0.75rem] rounded-md"
                onClick={() => handleRemove(movie.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h3>No movies in watchlist</h3>
      )}
    </div>
  );
}

export default Watchlist;
