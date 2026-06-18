import { useEffect, useRef } from "react";
import type { SearchBarProps } from "../Types/Types";

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleEnterDown(e: KeyboardEvent) {
      if (e.code === "Enter") {
        if (document.activeElement === inputElement.current) {
          return;
        }
        inputElement.current?.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown", handleEnterDown);
    return () => document.removeEventListener("keydown", handleEnterDown);
  }, [setQuery]);

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
