import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AccessContext from '../context';
import Header from '../components/Header'
import Bio from '../components/Bio'
import secrets from '../config/secrets'


class HomePage extends React.Component {
  render() {
// export const HomePage = () => {
  // let contextType = ThemeContext;
    console.log(this.context)
  // componentDidMount () {
  //   document.title = 'Home Page'
  // }

  // const onKeyUp = e => {
  //   if (this.refs.pass.value.toLowerCase() === secrets.passcode) {
  //     this.props.grantAccess();
  //   }
  //   if (e.keyCode === 13 && this.props.main.get('allowed')) {
  //     this.props.history.push('/resume');
  //   }
  // }

    return (
      <div>
        <Header/>
        <Bio/>
        <div className='resume-access-section'>
          <h5>To access my resume please enter the password 'hockey' below</h5>
          <div className="center">
            {/* <input ref='pass' onKeyUp={(e) => this.onKeyUp(e)} /> */}
          </div>
          {/* <p>{"(Password is 'hockey')"}</p> */}
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

