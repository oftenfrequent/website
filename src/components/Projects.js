import React from 'react';


export const Projects = (props) => {
  return (
    <div className="section-container projects">
      <h2>Projects</h2>
      {props.projects.map( (project,i) =>
        <div key={i} className="section-container">
          <div className="header-flex">
            <h3>
              <a href={project.url} target="_blank">{project.name}</a>
            </h3>
            <h3>
              <small>{project.date}</small>
            </h3>
          </div>
          <p className='divider-after'>
            {project.description}
            {i == 1
              ?(<span>
                {' The project was featured on '}
                <a href='https://www.youtube.com/watch?v=pUChD3HGAK4' target='_blank'>Fox 5 News </a>
                {'and unfortunately is no longer live.'}
                </span>
              ): null
            }
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
