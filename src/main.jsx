import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root";
import Home from "./Components/Home";
import AddTea from "./Components/AddTea";
import Details from "./Components/Details";
import Update from "./Components/Update";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Context/AuthProvider";
import Users from "./Components/Users";
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
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/teas/${params.id}`),
        Component: Update,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
