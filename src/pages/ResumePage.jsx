import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import Projects from '../components/Projects'
import Education from '../components/Education'
import Jobs from '../components/Jobs'


export class ResumePage extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentWillMount() {
    if (!this.props.main.get('allowed')) { hashHistory.push('/') }
  }

  componentDidMount () {
    document.title = 'Resume Page'
  }

  render () {
    return (
      <div>
        <div className="header-container">
          <h1>Kyle Burke</h1>
          <h5>
            <a href="https://www.linkedin.com/in/kylejayburke">LinkedIn</a>
            <span> | </span>
            <a href="https://github.com/k23Burke">Github</a>
            <span> | </span>
            <a href="mailto:k23burke@gmail.com?Subject=Guy%20Man%20Bro%20Dude">Email</a>
            <span> | </span>
            <a href="https://soundcloud.com/audios_music">Soundcloud</a>
          </h5>
          <h5 className>
            <span>New York, NY -> London, UK</span>
          </h5>
        </div>
        <Projects projects={this.props.main.get('projects')} />
        <Jobs jobs={this.props.main.get('workExperience')} />
        <Education schools={this.props.main.get('education')} />
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
)(ResumePage)

