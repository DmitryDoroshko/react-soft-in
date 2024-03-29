import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { CountriesContextProvider } from "./store/context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </React.StrictMode>,
);
