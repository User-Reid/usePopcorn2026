import { useRef } from "react";
import type { SearchBarProps } from "../Types/Types";
import { useKeyPress } from "../useKeyPress";

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  useKeyPress("Enter", () => {
    if (document.activeElement === inputElement.current) {
      return;
    }
    inputElement.current?.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
