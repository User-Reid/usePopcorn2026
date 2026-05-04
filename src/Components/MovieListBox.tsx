import { useState } from "react";
import type { MovieListBoxProps } from "../Types/Types";
import MovieList from "./MovieList";

export default function MovieListBox({ movies }: MovieListBoxProps) {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
}
