import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from "./pages/landing";
import Testing from "./components/Testi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Loader from "./assets/images/loader2.gif";
import { Admin } from "./pages/admin/admin";
import { Tenant } from "./pages/tenant/tenant";
import { useUser } from "./context/user-context";
import { useAuth } from "./context/auth-context";
import { Login } from "./pages/generic/login";

const AppRoutes = () => {
  const user = useUser();
  return (
    <>
      <div className="loader">
        <h1 className="loadingtext">
          <span />
        </h1>
        <p>ESTATE-ADMIN</p>
        <br />
        <img src={Loader} alt="" />{" "}
      </div>
      <Aside />
      <div id="wrapper">
        <div id="page-wrapper">
          <Header />
          <Switch>
            {/* <Route exact component={LandingPage} path="/" /> */}
            {user.roles[0] === 'subTenant' &&<Route exact component={Testing} path="/" />}
            {/* REFACTOR TO USE H.O.Cs */}
            {user.roles[0] === 'admin' && <Route component={Admin} path="/" />}
           { user.roles[0] === 'tenant' && <Route component={Tenant} path="/" />}
          </Switch>
        </div>
      </div>
    </>
  );
};

const Routes = () => {
  const user = useUser();
  return !user ? (
    <Login />
  ) : (
    <Router >
    <AppRoutes />
    </Router >
  );
};

export default Routes;
