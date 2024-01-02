import React from 'react';


export const Projects = (props) => {
  return (
    <div className="section-container projects">
      <h2>Projects</h2>
      {props.projects.map( (project,i) =>
        <div key={i} className="section-container">
          <div className="header-flex">
            <h3>
              <a href={project.url} target="_blank" rel="noreferrer">{project.name}</a>
            </h3>
            <h3>
              <small>{project.date}</small>
            </h3>
          </div>
          <p className='divider-after'>
            {project.description}
            {!!(project.name == 'Ximer') && (
              <span>
                {' The project was featured on '}
                <a href='https://www.youtube.com/watch?v=pUChD3HGAK4' target='_blank' rel="noreferrer">Fox 5 News </a>
                {'and unfortunately is no longer live.'}
              </span>
            )}
            {!!(project.name == 'Are Yew There Yet?') && (
              <span>
                {' The piece was featured the first edition of the '}
                <a href='https://zine.mochi.club/' target='_blank' rel="noreferrer">Mochi Zine</a>
                {' on the topic of [non]spiracy.'}
              </span>
            )}
          </p>
          <p>{project.myRole}</p>
          <ul>
            {project.technologies.map( (tech,i) =>
              <li key={i}>{tech}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Projects;
