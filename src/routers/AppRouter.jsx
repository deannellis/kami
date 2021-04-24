import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComponentsPage from "../pages/ComponentsPage";
import ThemePage from "../pages/ThemePage";
import UtilitiesPage from "../pages/UtilitiesPage";
import LandingPage from "../pages/LandingPage";
import AnimationTest from "../pages/AnimationTest";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/components">
        <ComponentsPage />
      </Route>
      <Route path="/theme">
        <ThemePage />
      </Route>
      <Route path="/utilities">
        <UtilitiesPage />
      </Route>
      <Route path="/ani-test">
        <AnimationTest />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
