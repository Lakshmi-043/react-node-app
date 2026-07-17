import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/travel-booking/src/App";
import "../src/travel-booking/src/index.css";
import { TravelProvider } from "../src/travel-booking/context/TravelContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TravelProvider>
      <App />
    </TravelProvider>
  </React.StrictMode>
);