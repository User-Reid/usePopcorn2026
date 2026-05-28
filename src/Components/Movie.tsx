import type { MovieProps } from "../Types/Types";

export default function Movie({
  movie,
  setSelectedMovieId,
  selectedMovieId,
}: MovieProps) {
  function handleSelectedAndUnselectMovie(): void {
    if (selectedMovieId === movie.imdbID) {
      setSelectedMovieId(null);
    } else {
      setSelectedMovieId(movie.imdbID);
    }
  }

  return (
    <li key={movie.imdbID} onClick={handleSelectedAndUnselectMovie}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
