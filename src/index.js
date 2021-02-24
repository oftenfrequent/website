import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as _ from 'lodash'
import 'babel-polyfill'

import App from './components/App';
import appRoutes from './routes'
import AccessContext from './context';

import './style/app.scss'

ReactDOM.render(
  <AccessContext.Provider value={false}>
    <App>
      {appRoutes()}
    </App>
  </AccessContext.Provider>,
  document.getElementById('app')
)