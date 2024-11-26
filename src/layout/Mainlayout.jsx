
import Blogs from '../pages/Blogs';
import Bookmarks from '../pages/Bookmarks';
import Home from '../pages/home';
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout =() => {
    return(

    <div>
       
        <div className='h-16' > 
            <Nav></Nav>
            </div>
            {/* packet*/}
            <div className='min-h-[calc(100vh-116px)]'>
            <Outlet></Outlet>
            </div>

            {/* Footer */}

            <Footer></Footer>

  </div>
    )
}

export default MainLayout;