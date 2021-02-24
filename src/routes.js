import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ResumePage from './pages/ResumePage';


export default function appRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage}/>
        {/* <Route path="/resume" component={ResumePage}/> */}
      </Switch>
    </Router>
  )
}
