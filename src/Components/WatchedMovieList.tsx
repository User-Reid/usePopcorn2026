import type { WatchedMovieListProps } from "../Types/Types";
import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched }: WatchedMovieListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
}
