import React from "react";
import Error from "../pages/Error";
import Home from "../pages/Home";
const MainRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/network",
        element: <Error />,
      },
    ],
  },
];

export default MainRoutes;
