import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import routes from "./routes";
import "./assest/css/tailwind.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
