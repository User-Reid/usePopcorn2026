import type { MovieSummaryProps } from "../Types/Types";

export default function MovieSummary({ watched }: MovieSummaryProps) {
  const average = (arr: number[]) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(
    watched.map((movie) => Number(movie.imdbRating)),
  );
  const avgUserRating = average(
    watched.map((movie) => Number(movie.userRating)),
  );
  const avgRuntime = average(watched.map((movie) => parseInt(movie.Runtime) || 0));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
