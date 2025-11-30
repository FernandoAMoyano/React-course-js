import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
/* import FirstApp from "./FirstApp"; */
import "./index.css";
import { CounterApp } from "./CounterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <FirstApp titulo="Hola Soy Goku" subtitle={123} /> */}
    <CounterApp value={10} />
  </StrictMode>
);
