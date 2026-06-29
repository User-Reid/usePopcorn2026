import Navigation from "./Components/Navigation";
import { useEffect, useState } from "react";
import Main from "./Components/Main";
import SearchBar from "./Components/SearchBar";
import MovieResults from "./Components/MovieResults";
import MovieList from "./Components/MovieList";
import MovieSummary from "./Components/MovieSummary";
import WatchedMovieList from "./Components/WatchedMovieList";
import Box from "./Components/Box";
import Loader from "./Components/Loader";
import ErrorMessage from "./Components/ErrorMessage";
import MovieDetails from "./Components/MovieDetails";
import { useFetchMovies } from "./Hooks/useFetchMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [watched, setWatched] = useLocalStorageState([], "watched");
  const [query, setQuery] = useState<string>("");
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  const { isLoading, movies, error } = useFetchMovies(
    query,
    selectedMovieId,
    setSelectedMovieId,
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape" && selectedMovieId) {
        setSelectedMovieId(null);
        setQuery("");
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovieId]);

  return (
    <>
      <Navigation>
        <SearchBar query={query} setQuery={setQuery} />
        <MovieResults movies={movies} />
      </Navigation>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              setSelectedMovieId={setSelectedMovieId}
              selectedMovieId={selectedMovieId}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedMovieId ? (
            <MovieDetails
              setSelectedMovieId={setSelectedMovieId}
              selectedMovieId={selectedMovieId}
              setWatched={setWatched}
              watched={watched}
            />
          ) : (
            <>
              <MovieSummary watched={watched} />
              <WatchedMovieList watched={watched} setWatched={setWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
