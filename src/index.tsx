import React from "react";
import ReactDOMClient from "react-dom/client";
import { TagScreen } from "./screens/TagScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TagScreen />);
