import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./stars.css";
import App from "./App.tsx";
import StarRating from "./Components/StarRating.tsx";
import Test from "./Components/Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      color="blue"
      size={70}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
    />
    <StarRating maxRating={10} size={20} color="red" defaultRating={3} />
    <StarRating maxRating={8} size={30} color="green" />
    <StarRating />
    <Test />
  </StrictMode>,
);
