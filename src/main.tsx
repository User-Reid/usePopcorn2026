import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./stars.css";
import App from "./App.tsx";
import StarRating from "./Components/StarRating.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </StrictMode>,
);
