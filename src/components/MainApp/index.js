import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from '../common/Header';
// import Footer from '../common/Footer';
import HomePage from '../HomePage';
import ComicsPage from '../ComicsPage';
import ComicsIssuePage from '../ComicsIssuePage';
import NotFound from '../NotFound';
import './App.css';

function MainApp() {
  return (
    <>
      {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/comics" component={ComicsPage} />
          <Route path="/comics-issues" component={ComicsIssuePage} />
          <Route component={NotFound} />
        </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default MainApp;