import React, { Dispatch, PropsWithChildren, useReducer } from 'react';
import content from './data/resumeInfo';
import { createContext } from './config/createContext';
import { Education } from './data/data/eduData';
import { Project } from './data/data/projectsData';
import { WorkExperience } from './data/data/jobData';

type GrantAcess = {
  type: 'GRANT_ACCESS';
}

type AccessActions = GrantAcess;

type AccessState = {
  access: boolean;
  content: {
    education: Education[],
    projects: Project[],
    workExperience: WorkExperience[],
  };
}

const initialState: AccessState = {
  access: false,
  content: {
    education: [],
    projects: [],
    workExperience: [],
  },
}

type AccessContextType = {
  access: boolean;
  content: {
    education: Education[],
    projects: Project[],
    workExperience: WorkExperience[],
  };
  dispatch: Dispatch<AccessActions>;
  // access: boolean;
  // grantAccess: () => void;
}

const reducer = (state: AccessState = initialState, action: AccessActions) => {
  switch (action.type) {
    case 'GRANT_ACCESS':
      return { ...state, access: true, content};
    default:
      return state;
  }
}

const [useAccessContext, ContextProvider] = createContext<AccessContextType>();

export const useContext = useAccessContext;

export const AccessProvider = ({ children }: PropsWithChildren) => {
  const [{ access }, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextProvider value={{ access, content, dispatch }}>
      {children}
    </ContextProvider>
  );
  }

export default AccessProvider;

// const AccessContext = React.createContext(content);

// export class AccessProvider extends React.Component {
//   // Context state
//   constructor (props) {
//     super(props);
//     this.state = {
//       content,
//       access: false
//     }
//   }

//   // Method to update state
//   grantAccess = () => {
//     this.setState((state) => ({
//       ...state,
//       access: true,
//     }));
//   }

//   render() {
//     const { children } = this.props
//     const { content, access } = this.state
//     const { grantAccess } = this

//     return (
//       <AccessContext.Provider
//         value={{
//           content,
//           access,
//           grantAccess,
//         }}
//       >
//         {children}
//       </AccessContext.Provider>
//     )
//   }
// }

// export default AccessContext;