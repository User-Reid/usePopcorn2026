import type React from "react";

export type MovieDataType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
};

export type WatchedDataType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  userRating: number;
};

export type NavigationProps = {
  children: React.ReactNode;
};

export type MainProps = {
  children: React.ReactNode;
};

export type MovieListBoxProps = {
  children: React.ReactNode;
};

export type MovieListProps = {
  movies: MovieDataType[];
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedMovieId: string | null;
};

export type MovieSummaryProps = {
  watched: WatchedDataType[];
};

export type WatchedMoviesBoxProps = {
  children: React.ReactNode;
};

export type WatchedMovieListProps = {
  watched: WatchedDataType[];
  setWatched: React.Dispatch<React.SetStateAction<WatchedDataType[]>>;
};

export type MovieProps = {
  movie: MovieDataType;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedMovieId: string | null;
};

export type WatchedMovieProps = {
  movie: WatchedDataType;
  watched: WatchedDataType[];
  setWatched: React.Dispatch<React.SetStateAction<WatchedDataType[]>>;
};

export type MovieResultsProps = {
  movies: MovieDataType[];
};

export type BoxProps = {
  children: React.ReactNode;
};

export type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type ErrorMessageProps = {
  message: string;
};

export type MovieDetailsProps = {
  selectedMovieId: string | null;
  setSelectedMovieId: React.Dispatch<React.SetStateAction<null | string>>;
  setWatched: React.Dispatch<React.SetStateAction<WatchedDataType[]>>;
  watched: WatchedDataType[];
};

export type MovieDetails = {
  Title: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: string[];
  imdbRating: string;
  imdbID: string;
  Type: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};
