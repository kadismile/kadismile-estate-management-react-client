import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from './pages/landing';
import Testing from './components/Testi';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from "./components/Aside";
import Loader from './assets/images/loader2.gif'



const AppRoutes = () => (
  <>
   <div className="loader"><h1 className="loadingtext"><span /></h1><p>ESTATE-ADMIN</p><br /><img src={Loader} alt="" /> </div>
    <Aside/>
    <div id="wrapper">
    <div id="page-wrapper">
    <Header/>
      <Switch>
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Testing} path="/testing" />
      </Switch>
    </div>
    </div>
  </>
);


const Routes = () => (
    <Router>
      <Switch>
        <Route path="/" component={AppRoutes} />
      </Switch>
    </Router>
);



export default Routes;