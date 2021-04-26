import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import ResumePage from './ResumePage'


export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/resume" component={ResumePage}/>
        </Switch>
      </Router>
    )
  }
}
