import { useState } from "react";
import type { ContentProps } from "./ContentBox";

export default function Content({
  maxPreviewLength,
  children,
  defaultOpen = false,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "blue",
}: ContentProps) {
  const [showMore, setShowMore] = useState<boolean>(defaultOpen);
  const words = (children as string).split(" ");
  const displayed =
    !showMore && maxPreviewLength
      ? words.slice(0, maxPreviewLength).join(" ") + "..."
      : children;

  return (
    <div>
      <span>{displayed}</span>
      <span
        onClick={() => setShowMore((prev) => !prev)}
        style={{ color: buttonColor, cursor: "pointer" }}
      >
        {showMore ? ` ${collapseButtonText}...` : ` ${expandButtonText}...`}
      </span>
    </div>
  );
}
