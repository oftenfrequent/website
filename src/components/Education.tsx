import React from 'react';
import { Education } from '../data/data/eduData';

type EduProps = {
  schools: Education[]
}

export const EducationComponent = ({ schools }: EduProps) => {
  
    return (
      <div className="section-container">
        <h2>Education</h2>
        {schools.map( (school,i) =>
          <div key={i} className="section-container">
            <div className="header-flex">
              <h3>
                <a href={school.url} target="_blank" rel="noreferrer">{school.name}</a>
              </h3>
              <h3>
                <small>{school.date}</small>
              </h3>
            </div>
            <h5>{school.location}</h5>
            <p>{school.brief}</p>
          </div>
        )}
      </div>
    )
}


export default EducationComponent
