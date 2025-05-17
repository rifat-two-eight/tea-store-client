import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root";
import Home from "./Components/Home";
import AddTea from "./Components/AddTea";
import Details from "./Components/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/teas"),
        Component: Home,
      },
      {
        path: "/addtea",
        Component: AddTea,
      },
      {
        path: "/teas/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/teas/${params.id}`),
        Component: Details,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
