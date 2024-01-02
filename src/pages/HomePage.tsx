import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "../context";
import Header from "../components/Header";
import Bio from "../components/Bio";


const HomePage = () => {
  // static contextType = AccessContext;
  const { access, dispatch } = useContext();
  const navigate = useNavigate();

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value.toLowerCase();
    if (inputValue === process.env.REACT_APP_PASSCODE) {
      dispatch({ type: "GRANT_ACCESS"});
    }
    if (e.key === "Enter" && access) {
      navigate("/resume");
    }
  }

    return (
      <div>
        <Header />
        <Bio />
        <div className="resume-access-section">
          <h5>To access my resume please enter the password 'hockey' below</h5>
          <div className="center">
            <input onKeyUp={onKeyUp} />
          </div>
          {access ? (
            <h5>
              <Link to="/resume">Resume</Link>
            </h5>
          ) : null}
        </div>
      </div>
    );
}

export default HomePage;
