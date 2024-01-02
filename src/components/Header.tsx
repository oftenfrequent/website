import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className='avatar-section'>
      <hr/>
      <hr/>
      <div className='avatar-container'>
        <Link to='/' />
      </div>
    </div>
    <h1>Kyle Burke</h1>
    <hr className='name-divider'/>
    <h5>
      <span>Madrid, Spain</span>
    </h5>
    <h5>
      <a href="https://www.linkedin.com/in/oftenfrequent" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <span> | </span>
      <a href="https://github.com/oftenfrequent" target="_blank" rel="noopener noreferrer">Github</a>
      {/* <span> | </span>
      <a href="https://gitlab.com/oftenfrequent" target="_blank" rel="noopener noreferrer">Gitlab</a> */}
      {/* <a href="https://soundcloud.com/audios_music" target="_blank" rel="noopener noreferrer">Soundcloud</a> */}
    </h5>
    <br/>
  </div>
)

export default Header
