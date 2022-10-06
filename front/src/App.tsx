import BreedDetail from "pages/BreedDetail/BreedDetail";
import NotExist from "pages/Error/NotExist";
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import routesNames from "./routes/customRoutes";
import MainRoute from "./routes/MainRoute";

const App = () => {
  const mainRoutes = {
    path: routesNames.home,
    element: <MainRoute />,
    children: [
      { path: "*", element: <NotExist /> },
      { path: routesNames.home, element: <Home /> },
      { path: routesNames.breed, element: <BreedDetail /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;
