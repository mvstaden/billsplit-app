import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import App2 from "./components2/App2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <App2 />
  </StrictMode>
);
