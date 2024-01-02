import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './HomePage'
import ResumePage from './ResumePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    // children: [
    //   { index: true, element: <Index /> },
    //   /* existing routes */
    // ],
  },
  {
    path: "/resume",
    element: <ResumePage />
  },
]);


export default class AppRoutes extends React.Component {
  render() {
    return (
      <RouterProvider router={router} />
      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" exact component={HomePage}/>
      //     <Route path="/resume" component={ResumePage}/>
      //   </Routes>
      // </BrowserRouter>
    )
  }
}
