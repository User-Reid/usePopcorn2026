import { useState } from "react";
import StarRating from "./StarRating";

export default function Test() {
  const [movieRating, setMovieRating] = useState<number | null>(null);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
