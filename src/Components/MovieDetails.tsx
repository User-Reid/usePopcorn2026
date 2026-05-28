import { useEffect, useState } from "react";
import type { MovieDetails, MovieDetailsProps } from "../Types/Types";

export default function MovieDetails({ selectedMovieId }: MovieDetailsProps) {
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    async function fetchMovieDetails(): Promise<void> {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${selectedMovieId}&apikey=9a8ee5a1`,
      );

      if (!res.ok) {
        throw new Error("There was an issue specifically with the movie ID.");
      }

      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie not found");

      setSelectedMovie(data);
    }

    fetchMovieDetails();
  }, [selectedMovieId]);

  return (
    <div className="details">
      <h1>Title: {selectedMovie?.Title}</h1>
      <p>Director: {selectedMovie?.Director}</p>
    </div>
  );
}
