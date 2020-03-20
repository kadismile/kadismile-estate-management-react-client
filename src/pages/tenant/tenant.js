import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { Login } from "../generic/login";

export const  Tenant = () => {
  let { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`${path}/login`}>
            <Login />
          </Route>
          <Route exact path={`${path}`}>
            Tenant
          </Route>
          <Route exact path={`${path}/create`}>
            New Tenant
          </Route>
          <Route exact path={`${path}/details/:id`}>
            Tenant Detail
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
