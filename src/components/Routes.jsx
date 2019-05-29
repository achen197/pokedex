import React from "react";
import { Switch, Route } from "react-router-dom";
import Headlines from "./Headlines";
import Pokemon from "./Pokemon";

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Headlines} />
        <Route exact path="/pokemon" component={Pokemon} />
      </Switch>
    </main>
  );
}

export default Routes;
