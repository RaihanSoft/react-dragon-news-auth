import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
    return (
        <div className="flex items-center justify-center gap-2 w-11/12 mx-auto " >
            <p className="bg-red-700 text-white"> Latest news</p>
            <Marquee pauseOnHover={true}  className="space-x-10 bg-gray-200 p-2  " >
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo aut illum, nobis quaerat eligendi repellat porro quidem fugiat obcaecati?</Link>                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo aut illum, nobis quaerat eligendi repellat porro quidem fugiat obcaecati?</Link>                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium explicabo aut illum, nobis quaerat eligendi repellat porro quidem fugiat obcaecati?</Link>
            </Marquee>
        </div>
    )
}

export default LatestNews
