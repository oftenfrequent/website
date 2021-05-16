import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AccessContext from "../context";
import Header from "../components/Header";
import Bio from "../components/Bio";
const { REACT_APP_PASSCODE } = REACT_APP;

class HomePage extends React.Component {
  static contextType = AccessContext;

  onKeyUp(e) {
    if (e.target.value.toLowerCase() === REACT_APP_PASSCODE) {
      this.context.grantAccess();
    }
    if (e.keyCode === 13) {
      this.props.history.push("/resume");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Bio />
        <div className="resume-access-section">
          <h5>To access my resume please enter the password 'hockey' below</h5>
          <div className="center">
            <input onKeyUp={(e) => this.onKeyUp(e)} />
          </div>
          <p>{`(Password is '${REACT_APP_PASSCODE}')`}</p>
          {this.context.access ? (
            <h5>
              <Link to="/resume">Resume</Link>
            </h5>
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePage;
