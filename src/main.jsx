import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CompaniesProvider } from "./context/CompaniesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompaniesProvider>
      <App />
    </CompaniesProvider>
  </StrictMode>
);
