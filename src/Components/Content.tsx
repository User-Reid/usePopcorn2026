import { useState } from "react";
import type { ContentProps } from "./ContentBox";

export default function Content({
  maxPreviewLength,
  container,
  children,
}: ContentProps) {
  const [previewLength, setPreviewLength] = useState<number | null>(
    maxPreviewLength ?? null,
  );
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div>
      <span>{children}</span>
      <span
        onClick={() => setShowMore((prev) => !prev)}
        style={{ color: "orange", cursor: "pointer" }}
      >
        {showMore ? " Show less..." : " Show More..."}
      </span>
    </div>
  );
}
