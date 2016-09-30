import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Projects from '../components/Projects'
import Education from '../components/Education'
import Jobs from '../components/Jobs'

export class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {
    document.title = 'Home Page'
    console.log('main', this.props.main.toJS())
  }

  render () {
    return (
      <div>
       <h1>Kyle Burke</h1>
       <h5>
        <a href="https://www.linkedin.com/in/kylejayburke">LinkedIn</a>
        <span> | </span>
        <a href="https://github.com/k23Burke">Github</a>
        <span> | </span>
        <a href="https://soundcloud.com/audios_music">Soundcloud</a>
        <span> | </span>
        <a href="mailto:k23burke@gmail.com?Subject=Guy%20Man%20Bro%20Dude">Shoot Me An Email</a>
      </h5>
       <h5>
        <span>New York, NY -> London, UK</span>
      </h5>
      <Projects projects={this.props.main.get('projects')} />
      <Education schools={this.props.main.get('education')} />
      <Jobs jobs={this.props.main.get('workExperience')} />
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    main: state.main
  }
};

export default connect(
  mapStateToProps
)(HomePage)

