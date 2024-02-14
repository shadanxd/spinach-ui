import React from "react";
import ReactDOMClient from "react-dom/client";
import { DesignSystems } from "./screens/DesignSystems";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DesignSystems />);
