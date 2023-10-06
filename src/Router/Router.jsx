import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/ErroElemnt/Error";
import Services from "../Pages/Home/Services/Services";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('events.json')
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('events.json')
            },
            {
                path: "/team",
                element: <Home></Home>
            },
            {
                path: "/team",
                element: <Home></Home>
            },
            {
                path: "/aboutUs",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;