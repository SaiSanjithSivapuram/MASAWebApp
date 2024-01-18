import { lazy } from "react";
import Teams from "../../pages/teams/Teams";
const HomePage = lazy(() => import("../../pages/home/HomePage"));
const AboutPage = lazy(() => import("../../pages/about/AboutPage"));
const ComingSoon =  lazy(() => import("../../pages/comingSoon/ComingSoon"));

const routeConfig = [
    {
        path: "/",
        exact: true,
        headerContent: true,
        element: <HomePage />
    },
    {
        path: "/aboutus/:team",
        headerContent: true,
        element: <Teams />
    },
    {
        path: "/projects",
        headerContent: true,
        element: <ComingSoon />
    }
]

export default routeConfig;