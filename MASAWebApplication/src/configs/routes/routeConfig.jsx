import { lazy } from "react";
import Teams from "../../pages/teams/Teams";
import ProjectsDashboard from "../../pages/projects/projectsDashboard";
import ProjectWrapper from "../../pages/projects/ProjectWrapper";
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
        element: <ProjectsDashboard />
    },
    {
        path: "/project/:projectName",
        headerContent: true,
        element: <ProjectWrapper />
    },
    {
        path: "/comingSoon",
        headerContent: true,
        element: <ComingSoon />
    },
]

export default routeConfig;