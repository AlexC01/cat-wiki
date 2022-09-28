import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import routesNames from "./routes/customRoutes";
import MainRoute from "./routes/MainRoute";

const App = () => {
  const mainRoutes = {
    path: routesNames.home,
    element: <MainRoute />,
    children: [{ path: routesNames.home, element: <Home /> }],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;
