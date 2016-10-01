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
      <div className="section-container projects">
        <h2>Projects</h2>
        {this.props.projects.map( (project,i) =>
          <div key={i} className="section-container">
            <h3>
              <a href={project.get('url')} target="_blank">{project.get('name')}</a>
              <small>{project.get('date')}</small>
            </h3>
            <p className='divider-after'>
              {project.get('description')}
              {i == 0
                ?(<span>
                  {' The project was featured on '}
                    <a href='https://www.youtube.com/watch?v=pUChD3HGAK4' target='_blank'>Fox 5 News.</a>
                  </span>
                ): null
              }
            </p>
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
