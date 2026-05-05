import { useState } from "react";
import type { WatchedMoviesBoxProps } from "../Types/Types";

export default function WatchedMoviesBox({ children }: WatchedMoviesBoxProps) {
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <>{children}</>}
    </div>
  );
}
