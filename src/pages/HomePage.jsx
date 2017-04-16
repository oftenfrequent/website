import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'


import Projects from '../components/Projects'
import Education from '../components/Education'
import Jobs from '../components/Jobs'
import secrets from '../config/secrets'

export class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {
    document.title = 'Home Page'
  }

  onKeyUp (e) {
    if (this.refs.pass.value.toLowerCase() === secrets.passcode) {
      this.props.grantAccess();
    }
    if (e.keyCode === 13 && this.props.main.get('allowed')) {
      this.props.history.push('/resume');
    }
  }

  render () {
    return (
      <div>
        <div className="header-container">
          <h1>Kyle Burke</h1>
          <br/>
          <br/>
          <h5>To access my resume please enter the password below</h5>
          <div className="center">
            <input ref='pass' onKeyUp={(e) => this.onKeyUp(e)} />
          </div>
          {this.props.main.get('allowed')
            ?(<div>
              <br/>
              <h5><Link to="/resume">Resume</Link></h5>
              </div>)
            : null
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    main: state.main
  }
};

const grantAccess = () => {
  return { type: 'GRANT_ACCESS' }
}

export default connect(
  mapStateToProps,
  {
    grantAccess
  }
)(HomePage)

