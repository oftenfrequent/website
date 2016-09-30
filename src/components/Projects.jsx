import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';


export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <hr/>
        {this.props.projects.map( (project,i) =>
          <div key={i}>
            <h3>{project.get('name')}<small>{project.get('date')}</small></h3>
            <p>{project.get('url')}</p>
            <p>{project.get('description')}</p>
            <p>{project.get('myRole')}</p>
            <ul>
              {project.get('technologies').map( (tech,i) =>
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
)(Projects)

Projects.propTypes = {
    projects: React.PropTypes.object,
};
