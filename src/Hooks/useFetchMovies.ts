import type { MovieDataType } from "../Types/Types";
import React, { useEffect, useState } from "react";

export function useFetchMovies(
  query: string,
  selectedMovieId: string | null,
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string | null>>,
) {
  const [movies, setMovies] = useState<MovieDataType[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const key: string = "e91d2696";

  useEffect(
    function () {
      if (query.length < 3) {
        return;
      }

      const controller: AbortController = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal },
          );

          if (selectedMovieId) {
            setSelectedMovieId(null);
          }

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
          // console.log(data.Search);
        } catch (err) {
          const error = err as Error;
          console.error((err as Error).message);

          if (error.name !== "AbortError") {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchMovies();

      return function (): void {
        controller.abort();
      };
    },
    [query],
  );

  return { isLoading, error, movies };
}
