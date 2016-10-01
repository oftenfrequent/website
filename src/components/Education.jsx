import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';


export class Education extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="section-container">
        <h2>Schools</h2>
        {this.props.schools.map( (school,i) =>
          <div key={i} className="section-container">
            <h3>
              <a href={school.get('url')} target="_blank">{school.get('name')}</a>
              <small>{school.get('date')}</small>
            </h3>
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
