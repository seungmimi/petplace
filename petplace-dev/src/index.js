import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";
import "./Common.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
