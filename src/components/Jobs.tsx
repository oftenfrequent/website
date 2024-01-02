import { WorkExperience } from '../data/data/jobData';

type JobProps = {
  jobs: Array<WorkExperience>
}

export const Jobs = ({ jobs }: JobProps) =>  {

    return (
      <div className="section-container">
        <h2>Work Experience</h2>
        {jobs.map( (job:WorkExperience, i: number) =>
          <div key={i} className="section-container">
            <div className="header-flex">
              <h3>
                <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
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
              {job.technologies.map( (tech: string, j: number) =>
                <li key={j}>{tech}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
}

export default Jobs
