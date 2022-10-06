import BreedDetail from "pages/BreedDetail/BreedDetail";
import NotExist from "pages/Error/NotExist";
import MostSearched from "pages/MostSearched/MostSearched";
import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import routesNames from "./routes/customRoutes";
import MainRoute from "./routes/MainRoute";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const mainRoutes = {
    path: routesNames.home,
    element: <MainRoute />,
    children: [
      { path: "*", element: <NotExist /> },
      { path: routesNames.home, element: <Home /> },
      { path: routesNames.breed, element: <BreedDetail /> },
      { path: routesNames.mostSearch, element: <MostSearched /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;
