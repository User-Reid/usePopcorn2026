import { useEffect } from "react";
import type { SearchBarProps } from "../Types/Types";

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  useEffect(() => {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []);

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
