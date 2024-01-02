import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useContext } from "../context";
import Header from '../components/Header'
import Bio from '../components/Bio'
import Jobs from '../components/Jobs'
import Projects from '../components/Projects'
import Education from '../components/Education'

export const ResumePage = () => {
  const { access, content } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!access) navigate('/')
  }, [access, navigate])

  const { workExperience, projects, education } = content
  return (
    <div>
      <Header/>
      <Bio />
      <Projects projects={projects} />
      <Jobs jobs={workExperience} />
      <Education schools={education} />
    </div>
  )
}
export default ResumePage
