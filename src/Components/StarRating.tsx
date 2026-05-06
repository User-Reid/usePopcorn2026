import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  maxRating?: number;
};

type ContainerStyleType = {
  display: string;
  alignItems: string;
  gap: string;
};

type StarContainerStyleType = {
  display: string;
  gap: string;
};

type TextStyleType = {
  lineHeight: string;
  margin: string;
};

const containerStyle: ContainerStyleType = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle: StarContainerStyleType = {
  display: "flex",
  gap: "4px",
};

const textStyle: TextStyleType = {
  lineHeight: "1",
  margin: "0px",
};

export default function StarRating({ maxRating = 5 }: StarRatingProps) {
  const [starRating, setStarRating] = useState<number | null>(null);

  function handleRate(i: number): void {
    setStarRating(i);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            handleRate={() => handleRate(i + 1)}
            full={(starRating ?? 0) >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{starRating ?? ""}</p>
    </div>
  );
}
