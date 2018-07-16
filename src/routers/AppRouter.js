import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Component Imports
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import WindStop from '../components/WindStop';
//Page Imports
import HomePage from '../components/HomePage';
import CapabilitiesPage from '../components/CapabilitiesPage';
import ValuesPage from '../components/ValuesPage';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import CareersPage from '../components/CareersPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Logo imageUrl="/images/lws-logo.svg" />
      <Navigation />
      <WindStop imageUrl="/images/windstop-overlay.svg" />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/capabilities" component={CapabilitiesPage} />
          <Route path="/values" component={ValuesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/careers" component={CareersPage} />
        </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
