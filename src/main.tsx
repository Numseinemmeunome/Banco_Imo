import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './components/home/Home.tsx'
import Profile from './components/Profile/Profile.tsx'
import ProfilePage from './components/Profile/ProfilePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "Profile",
        element: <Profile/>,
      },
      {
        path: "/profile/:id",
        element:<ProfilePage/>
      }
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
