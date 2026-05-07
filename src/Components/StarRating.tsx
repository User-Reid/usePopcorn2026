import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
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
  color: string;
  fontSize: string;
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

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className,
  messages = [],
  defaultRating,
  onSetRating,
}: StarRatingProps) {
  const [starRating, setStarRating] = useState<number | null>(
    defaultRating ?? null,
  );
  const [tempRating, setTempRating] = useState<number | null>(null);

  function handleRate(i: number): void {
    setStarRating(i);
    onSetRating?.(i);
  }

  const textStyle: TextStyleType = {
    lineHeight: "1",
    margin: "0px",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            handleRate={() => handleRate(i + 1)}
            full={tempRating ? tempRating >= i + 1 : (starRating ?? 0) >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(null)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : (starRating ?? 0) - 1]
          : tempRating || starRating || null}
      </p>
    </div>
  );
}
