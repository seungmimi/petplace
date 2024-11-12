import React from "react";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";

import App from "./App";
import "./Common.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>
);
