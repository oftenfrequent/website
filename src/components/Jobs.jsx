import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';


export class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        {this.props.jobs.map( (job, i) =>
          <div key={i}>
            <h3>{job.get('company')}<small>{job.get('date')}</small></h3>
            <h4>{job.get('url')}</h4>
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
