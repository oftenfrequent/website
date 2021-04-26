import React, { useContext } from 'react'

import AccessContext from '../context';
import Header from '../components/Header'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Education from '../components/Education'

export const ResumePage = props => {
  const context = useContext(AccessContext);

  if (!context.access) props.history.push('/')

  const { workExperience, projects, education } = context.content
  return (
    <div>
      <Header/>
      <Projects projects={projects} />
      <Jobs jobs={workExperience} />
      <Education schools={education} />
    </div>
  )
}
export default ResumePage
