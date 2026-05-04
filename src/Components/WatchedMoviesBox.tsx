import { useState } from "react";
import type { WatchedMoviesBoxProps, WatchedDataType } from "../Types/Types";
import MovieSummary from "./MovieSummary";
import WatchedMovieList from "./WatchedMovieList";

export default function WatchedMoviesBox({
  tempWatchedData,
}: WatchedMoviesBoxProps) {
  const [watched, setWatched] = useState<WatchedDataType[]>(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <MovieSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
