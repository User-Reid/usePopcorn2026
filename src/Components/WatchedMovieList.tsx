import type { WatchedMovieListProps } from "../Types/Types";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({
  watched,
  setWatched,
}: WatchedMovieListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} setWatched={setWatched} />
      ))}
    </ul>
  );
}
