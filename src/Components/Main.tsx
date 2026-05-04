import type { MainProps } from "../Types/Types";
import MovieListBox from "./MovieListBox";
import WatchedMoviesBox from "./WatchedMoviesBox";

export default function Main({ movies, tempWatchedData }: MainProps) {
  return (
    <main className="main">
      <MovieListBox movies={movies} />
      <WatchedMoviesBox tempWatchedData={tempWatchedData} />
    </main>
  );
}
