import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './HomePage'
import ResumePage from './ResumePage'
import ChatPage from './ChatPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />
  },
  {
    path: "/chat",
    element: <ChatPage />
  },
]);


export default class AppRoutes extends React.Component {
  render() {
    return (
      <RouterProvider router={router} />
    )
  }
}
