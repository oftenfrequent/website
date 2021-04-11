import React from 'react'

import AccessContext from '../context';
import Header from '../components/Header'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Education from '../components/Education'


export class ResumePage extends React.Component {
  static contextType = AccessContext;
  // constructor(props, context) {
  //   super(props, context)
  //   console.log('props', props)
  //   console.log('context', context)
  //   console.log('_________context.access__________', !context.access)
  //   console.log('_________context.access__________', typeof context.access)
  //   if (!context.acccess) {
  //     console.log('GO BACK TO ///////////')
  //     props.history.push('/')
  //   }
  //   if (context.access) {
  //     console.log('GO FUCK YOURSELF BACK TO ///////////')
  //     props.history.push('/')
  //   }
  // }

  componentDidMount() {
    console.log('props', this.props)
    console.log('context', this.context)
    console.log('_________context.access__________', this.context.access)
    console.log('_________context.access__________', typeof this.context.access)
    if (!this.context.acccess) {
      console.log('GO BACK TO ///////////')
      this.props.history.push('/')
    }
    if (this.context.access) {
      console.log('GO FUCK YOURSELF BACK TO ///////////')
      this.props.history.push('/')
    }
  }

  render () {
    const { workExperience, projects, education } = this.context.content
    return (
      <div>
        <Header/>
        <Projects projects={projects} />
        <Jobs jobs={workExperience} />
        <Education schools={education} />
      </div>
    )
  }
}
export default ResumePage
