import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";

// import Footer from "../main/Footer.jsx";

function Layout() {
    return (
       <div>
        <Outlet/>
        <Toaster/>
        {/* <Footer /> */}
       </div>
    )
}

export default Layout
