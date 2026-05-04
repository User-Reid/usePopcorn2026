import type { MovieListProps } from "../Types/Types";
import Movie from "./Movie";

export default function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
