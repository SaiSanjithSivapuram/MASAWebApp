import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import LeadershipTeamPage from "../../pages/about/LeaderShipTeamPage";

const routeConfig = [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/aboutus",
        element: <AboutPage />,
    },
    {
        path: "/leadershipTeam",
        element: <LeadershipTeamPage />
    }
]

export default routeConfig;