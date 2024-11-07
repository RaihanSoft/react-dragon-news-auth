import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const MainLayouts = () => {
    return (
        <div>

            {/* Favbar  */}
            <Navbar />

            {/* Dynamic Content  */}
            <div className="h-screen-[calc(100vh-300px)]">
                <Outlet />
            </div>

            {/* Footer  */}
            <Footer />

        </div>
    )
}

export default MainLayouts
