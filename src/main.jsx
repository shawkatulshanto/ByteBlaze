
import  ReactDom from 'React-dom/client'
import React from 'react'
import './index.css'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Home from './pages/home.jsx'
import MainLayout from './layout/mainlayout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
       element: <Home></Home>

      },
      {
        path: '/Blogs',
       element: <Blogs></Blogs>

      },
      {
        path: '/Bookmarks',
       element: <Bookmarks></Bookmarks>

      },
    ],
  },
 
])

ReactDom.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}/>
  
)
