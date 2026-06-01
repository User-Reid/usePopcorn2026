import type { WatchedMovieProps } from "../Types/Types";

export default function WatchedMovie({ movie, setWatched }: WatchedMovieProps) {
  function handleRemoveWatched(movieToRemove: string): void {
    setWatched((prev) =>
      prev.filter((watchedMovie) => watchedMovie.imdbID !== movieToRemove),
    );
  }

  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => handleRemoveWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
