import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { hashHistory } from 'react-router'

import '../style/app.scss'

export class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(
  mapStateToProps,
  {  }
)(App)

