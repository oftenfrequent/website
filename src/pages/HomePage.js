import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AccessContext from '../context';
import Header from '../components/Header'
import Bio from '../components/Bio'
import secrets from '../config/secrets'


class HomePage extends React.Component {
  static contextType = AccessContext;

  onKeyUp(e) {
    console.log('e.target.value', e.target.value)
    if (e.target.value.toLowerCase() === secrets.passcode) {
      this.context.grantAccess();
    }
    if (e.keyCode === 13) {
      this.props.history.push('/resume');
    }
  }

  render() {
    console.log('this.context', this.context)
    return (
      <div>
        <Header/>
        <Bio/>
        <div className='resume-access-section'>
          <h5>To access my resume please enter the password 'hockey' below</h5>
          <div className="center">
            <input onKeyUp={(e) => this.onKeyUp(e)} />
          </div>
          <p>{"(Password is 'hockey')"}</p>
          {this.context.access
            ? <h5><Link to="/resume">Resume</Link></h5>
            : null
          }
        </div>
      </div>
    )
  }
}

export default HomePage
