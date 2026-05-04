import type { MovieResultsProps } from "../Types/Types";

export default function MovieResults({ movies }: MovieResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
