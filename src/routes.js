import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './pages/HomePage';


export default function appRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={HomePage}/>
    </Route>
  )
}
