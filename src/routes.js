import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Shef from "./pages/shef";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "shef",
        element: <Shef/>,
    },
]);

export default router;