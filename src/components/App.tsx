import React, { PropsWithChildren } from 'react'

export const App = ({children}: PropsWithChildren) => (
  <div className='main-container'>
    {children}
  </div>
)

export default App;

