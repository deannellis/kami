import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ThemePage from "../pages/ThemePage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/theme">
        <ThemePage />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
