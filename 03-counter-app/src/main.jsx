import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import FirstApp from "./FirstApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <FirstApp titulo="Hola Soy Goku" subtitle={123} />
  </StrictMode>
);
