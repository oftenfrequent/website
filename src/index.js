import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import App from './components/App';
import Routes from './pages'
import { AccessProvider } from './context';

import './style/app.css'

ReactDOM.render(
  <AccessProvider value={false}>
    <App>
      <Routes/>
    </App>
  </AccessProvider>,
  document.getElementById('app')
)
