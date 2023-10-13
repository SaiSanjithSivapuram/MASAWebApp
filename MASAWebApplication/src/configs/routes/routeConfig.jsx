import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";

const routeConfig = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/about",
        element: <AboutPage />
    }
]

export default routeConfig;