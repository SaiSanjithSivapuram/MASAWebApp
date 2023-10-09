import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";

const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
])

export default routeConfig;