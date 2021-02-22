import React from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';


export class Education extends React.Component {
  render() {
    return (
      <div className="section-container">
        <h2>Education</h2>
        {this.props.schools.map( (school,i) =>
          <div key={i} className="section-container">
            <div className="header-flex">
              <h3>
                <a href={school.get('url')} target="_blank">{school.get('name')}</a>
              </h3>
              <h3>
                <small>{school.get('date')}</small>
              </h3>
            </div>
            <h5>{school.get('location')}</h5>
            <p>{school.get('brief')}</p>
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
)(Education)

Education.propTypes = {
    schools: React.PropTypes.object,
};
