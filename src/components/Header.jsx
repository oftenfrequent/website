import { Link } from 'react-router'

export default () => {
  return (
    <div className="header-container">
      <Link to='/'>
        <div className='avatar-section'>
          <hr/>
          <hr/>
          <div className='avatar-container'>
            <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/17240673_497503820373467_3468441520716811580_o.jpg?oh=0497d5079f45bc63a8f4aea6e6b14bde&oe=5994BD1A' />
          </div>
        </div>
      </Link>
      <h1>Kyle Burke</h1>
      <hr className='name-divider'/>
      <h5>
        <span>New York, NY | London, UK</span>
      </h5>
      <h5>
        <a href="https://www.linkedin.com/in/kylejayburke" target="_blank">LinkedIn</a>
        <span> | </span>
        <a href="https://github.com/k23Burke" target="_blank">Github</a>
        <span> | </span>
        <a href="https://soundcloud.com/audios_music" target="_blank">Soundcloud</a>
      </h5>
      <br/>
    </div>

  )
}
            // <img src='https://static1.squarespace.com/static/517edf31e4b051aa0c8ed8f2/54fa2574e4b08dce003e66b4/561036cbe4b0b27692184acc/1443903265723/DSC_6737_BW.jpg?format=1000w' />
        // <a href="mailto:k23burke@gmail.com?Subject=Guy%20Man%20Bro%20Dude" target="_blank">Email</a>
        // <span> | </span>
