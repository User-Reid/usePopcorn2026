import type { NavigationProps } from "../Types/Types";
import Logo from "./Logo";
import MovieResults from "./MovieResults";
import SearchBar from "./SearchBar";

export default function Navigation({ movies }: NavigationProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <MovieResults movies={movies} />
    </nav>
  );
}
