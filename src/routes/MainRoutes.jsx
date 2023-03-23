import React from "react";
import Network from "../network/Network";
import Error from "../pages/Error";
import Home from "../pages/Home";
const MainRoutes = [
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "/network",
    //     element: <Error />,
    //   },
    // ],
  },
  {
    path: "/network",
    element: <Network />,
  },

  {
    path: "*",
    element: <Error />,
  },
];

export default MainRoutes;
