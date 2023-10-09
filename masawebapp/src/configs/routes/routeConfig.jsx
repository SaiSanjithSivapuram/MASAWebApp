import Home from "@/app/page";
import { createBrowserRouter } from "react-router-dom";

const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

export default routeConfig;