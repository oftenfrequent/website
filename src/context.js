import React from 'react';
import content from './data/resumeInfo';

const AccessContext = React.createContext(content);

export class AccessProvider extends React.Component {
  // Context state
  constructor (props) {
    super(props);
    this.state = {
      content,
      access: false
    }
  }

  // Method to update state
  grantAccess = () => {
    this.setState((state) => ({
      ...state,
      access: true,
    }));
  }

  render() {
    const { children } = this.props
    const { content, access } = this.state
    const { grantAccess } = this

    return (
      <AccessContext.Provider
        value={{
          content,
          access,
          grantAccess,
        }}
      >
        {children}
      </AccessContext.Provider>
    )
  }
}

export default AccessContext;