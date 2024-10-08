import React from "react";
import { createBrowserRouter, Navigate} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/movies-list" />,
  },
  {
    path: "/movies-list",
    // lazy loading components for better performance
    async lazy() {
      let MovieList = await import("../../pages/MovieList/index");
      return {
        Component: MovieList.default,
      };
    },
  }
]);
