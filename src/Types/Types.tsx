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
  movies: MovieDataType[];
};

export type MainProps = {
  movies: MovieDataType[];
  tempWatchedData: WatchedDataType[];
};

export type MovieListBoxProps = {
  movies: MovieDataType[];
};

export type MovieListProps = {
  movies: MovieDataType[];
};

export type MovieSummaryProps = {
  watched: WatchedDataType[];
};

export type WatchedMoviesBoxProps = {
  tempWatchedData: WatchedDataType[];
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
