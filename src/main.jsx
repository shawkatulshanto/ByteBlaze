
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import Blogs from './pages/Blogs.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Mainlayout from './layout/Mainlayout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout/>,
    children: [
      {
       path: '/',
       element: <Home/>,
      },
      {
       path: '/Blogs',
       element: <Blogs/>,
      },
      {
       path: '/Bookmarks',
       element: <Bookmarks/>,
      },
    ],
  },
 
])

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}/>
  
)
