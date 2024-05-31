import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement: <h1>Error !!</h1>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path: "/contact",
                element:<h1>Contact</h1>,
            },
            {
                path: "/contact",
                element:<h1>Contact</h1>,
            },
        ],
    },
]);

export default Router