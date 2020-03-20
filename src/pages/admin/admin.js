import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Landing from "../landing";
import { LandingTest } from "./landing";

export const Admin = () => {
  let { path, url } = useRouteMatch();
  console.log('path');
  console.log(`${path}login`);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={`${path}login`}>
            
            Login
          </Route>
          <Route exact path={`${path}`}>
            Admin
          </Route>
          <Route exact component={LandingTest} path={`${path}landing`}>
           
          </Route>
          <Route exact path={`${path}:id`}>
            asddd
            {/* <Unit />{" "} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
