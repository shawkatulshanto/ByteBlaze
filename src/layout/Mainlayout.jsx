import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/home"


const Mainlayout =() =>{

    return (
        <div>
<div className="h-16">
    <Nav></Nav>
    </div>

   {/*packet*/}
   <Outlet></Outlet>


        </div>
    );

};

export default Mainlayout;