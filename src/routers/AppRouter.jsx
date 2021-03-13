import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ThemePage from "../pages/ThemePage";
import UtilitiesPage from "../pages/UtilitiesPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/theme">
        <ThemePage />
      </Route>
      <Route path="/utilities">
        <UtilitiesPage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
