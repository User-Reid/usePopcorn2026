import type React from "react";

export type MovieDataType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type WatchedDataType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
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
};

export type MovieSummaryProps = {
  watched: WatchedDataType[];
};

export type WatchedMoviesBoxProps = {
  children: React.ReactNode;
};

export type WatchedMovieListProps = {
  watched: WatchedDataType[];
};

export type MovieProps = {
  movie: MovieDataType;
};

export type WatchedMovieProps = {
  movie: WatchedDataType;
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
