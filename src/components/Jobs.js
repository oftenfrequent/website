import React from 'react';


export class Jobs extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h2>Work Experience</h2>
        {this.props.jobs.map( (job, i) =>
          <div key={i} className="section-container">
            <div className="header-flex">
              <h3>
                <a href={job.url} target="_blank">{job.company}</a>
              </h3>
              <h3>
                <small>{job.date}</small>
              </h3>
            </div>
            <p className='divider-after'>
              {job.description}
            </p>
            <p>{job.myRole}</p>
            <ul>
              {job.technologies.map( (tech, i) =>
                <li key={i}>{tech}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Jobs
