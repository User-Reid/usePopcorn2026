import type { SearchBarProps } from "../Types/Types";

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
