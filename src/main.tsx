import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ImageContextProvider from "./context/ImageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </React.StrictMode>
);
