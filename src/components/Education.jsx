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
      <div>
        <h3>Schools</h3>
        <hr/>
        {this.props.schools.map( (school,i) =>
          <div key={i}>
            <h3>{school.get('name')}<small>{school.get('date')}</small></h3>
            <h4>{school.get('location')}</h4>
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
