import { lazy } from "react";
import Teams from "../../pages/teams/Teams";
const HomePage = lazy(() => import("../../pages/home/HomePage"));
const AboutPage = lazy(() => import("../../pages/about/AboutPage"));

const routeConfig = [
    {
        path: "/",
        exact: true,
        headerContent: true,
        element: <HomePage />
    },
    {
        path: "/aboutus",
        exact: true,
        headerContent: true,
        element: <AboutPage />,
    },
    {
        path: "/aboutus/:team",
        headerContent: true,
        element: <Teams />
    }
]

export default routeConfig;