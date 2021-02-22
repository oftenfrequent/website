import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';


export class Jobs extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h2>Work Experience</h2>
        {this.props.jobs.map( (job, i) =>
          <div key={i} className="section-container">
            <div className="header-flex">
              <h3>
                <a href={job.get('url')} target="_blank">{job.get('company')}</a>
              </h3>
              <h3>
                <small>{job.get('date')}</small>
              </h3>
            </div>
            <p>{job.get('myRole')}</p>
            <ul>
              {job.get('technologies').map( (tech, i) =>
                <li key={i}>{tech}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    )
  }
}



function mapStateToProps(state){
  return {
    // prop: state.get(''),
  }
}


export default connect(
  mapStateToProps,
  {
    //action creators
  }
)(Jobs)

Jobs.propTypes = {
    jobs: React.PropTypes.object,
};
