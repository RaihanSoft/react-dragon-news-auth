import { createBrowserRouter, } from "react-router-dom";
import MainLayouts from "../MainLayout/MainLayouts";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Career from '../Pages/Career'
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('../categories.json')
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/career',
                element: <Career />
            }
        ]
    },


]);

export default router