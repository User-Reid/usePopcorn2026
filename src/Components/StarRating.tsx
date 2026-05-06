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
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>⭐{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
