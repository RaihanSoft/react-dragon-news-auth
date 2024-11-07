import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"

const MainLayouts = () => {

    const [loadNews, setLoadNews] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setLoadNews(data))
    }, [])



    return (
        <div>

            {/* Favbar  */}
            <Navbar />

            {/* Dynamic Content  */}
            <div className="h-screen-[calc(100vh-300px)]">
                <Outlet context={loadNews} />
            </div>

            {/* Footer  */}
            <Footer />

        </div>
    )
}

export default MainLayouts
