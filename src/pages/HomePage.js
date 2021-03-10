import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AccessContext from '../context';
import Header from '../components/Header'
import Bio from '../components/Bio'
import secrets from '../config/secrets'


class HomePage extends React.Component {
  // constructor(props) {
  //   this.state = {
  //     allowed: false,
  //   }
  // }

  // useEffect(() => {
  //   document.title = 'Home Page'
  // })

  // onKeyUp(e) {
  //   console.log('e.target.value', e.target.value)
  //   if (e.target.value.toLowerCase() === secrets.passcode) {
  //     this.props.grantAccess();
  //   }
  //   if (e.keyCode === 13 && this.props.main.get('allowed')) {
  //     this.props.history.push('/resume');
  //   }
  // }

  render() {
    return (
      <div>
        <Header/>
        <Bio/>
        <div className='resume-access-section'>
          <h5>To access my resume please enter the password 'hockey' below</h5>
          <div className="center">
            {/* <input onKeyUp={(e) => onKeyUp(e)} /> */}
          </div>
          <p>{"(Password is 'hockey')"}</p>
          {/* {this.props.main.get('allowed')
            ?(<div>
              <br/>
              <h5><Link to="/resume">Resume</Link></h5>
              </div>)
            : null
          } */}
        </div>
      </div>
    )
  }
}

HomePage.contextType = AccessContext;

export default HomePage

// function mapStateToProps (state, props) {
//   return {
//     main: state.main
//   }
// };

// const grantAccess = () => {
//   return { type: 'GRANT_ACCESS' }
// }

// export default connect(
//   mapStateToProps,
//   {
//     grantAccess
//   }
// )(HomePage)

