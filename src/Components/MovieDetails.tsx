import { useEffect, useState } from "react";
import type {
  MovieDetails,
  MovieDetailsProps,
  WatchedDataType,
} from "../Types/Types";
import Loader from "./Loader";
import StarRating from "./StarRating";

export default function MovieDetails({
  selectedMovieId,
  setSelectedMovieId,
  setWatched,
  watched,
}: MovieDetailsProps) {
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [starRating, setStarRating] = useState<number | null>(null);

  function handleAddWatchedMovie(movie: MovieDetails): void {
    const alreadyWatched = watched.some(
      (watchedMovie) => watchedMovie.Title === movie.Title,
    );

    if (movie === null) {
      throw new Error("There is no movie to add.");
    } else if (alreadyWatched) {
      setWatched((prev) =>
        prev.map((watchedMovie) =>
          watchedMovie.Title === movie.Title
            ? { ...watchedMovie, userRating: starRating ?? 0 }
            : watchedMovie,
        ),
      );
      setSelectedMovieId(null);
    } else {
      const watchedMovie: WatchedDataType = {
        Title: movie.Title,
        imdbID: movie.imdbID,
        Year: movie.Released,
        Poster: movie.Poster,
        Runtime: movie.Runtime,
        imdbRating: movie.imdbRating,
        userRating: starRating ?? 0,
      };

      setWatched((prev) => [...prev, watchedMovie]);
      setSelectedMovieId(null);
    }
  }

  useEffect(() => {
    async function fetchMovieDetails(): Promise<void> {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?i=${selectedMovieId}&apikey=9a8ee5a1`,
      );

      if (!res.ok) {
        throw new Error("There was an issue specifically with the movie ID.");
      }

      const data = await res.json();
      if (data.Response === "False") throw new Error("Movie not found");

      setSelectedMovie(data);
      setIsLoading(false);
    }

    fetchMovieDetails();
  }, [selectedMovieId]);

  useEffect(() => {
    if (!selectedMovie?.Title) {
      return;
    }

    document.title = `Movie | ${selectedMovie?.Title}`;

    return function () {
      document.title = "usePopcorn";
      console.log(`Clean up effect for movie ${selectedMovie.Title}`);
    };
  }, [selectedMovie]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <header>
            <button
              className="btn-back"
              onClick={() => setSelectedMovieId(null)}
            >
              &larr;
            </button>
            <img
              src={selectedMovie?.Poster}
              alt={`Poster of ${selectedMovie?.Title} movie`}
            />
            <div className="details-overview">
              <h2>{selectedMovie?.Title}</h2>
              <p>
                {selectedMovie?.Released} &bull; {selectedMovie?.Runtime}
              </p>
              <p>{selectedMovie?.Genre}</p>
              <p>
                <span>⭐</span>
                {selectedMovie?.imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                size={24}
                setStarRating={setStarRating}
                starRating={starRating}
              />

              {starRating && (
                <button
                  className="btn-add"
                  onClick={() => handleAddWatchedMovie(selectedMovie!)}
                >
                  ➕ Add to watched list
                </button>
              )}
            </div>
            <p>
              <em>{selectedMovie?.Plot}</em>
            </p>
            <p>Starring {selectedMovie?.Actors}</p>
            <p>Directed by: {selectedMovie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
