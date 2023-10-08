import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/ErroElemnt/Error";
import Services from "../Pages/Home/Services/Services";
import Team from "../Pages/Team/Team";
import HomeAbout from "../Pages/Home/HomeAbout";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('events.json'),
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('events.json')
            },
            {
                path: "/service/:id",
                element: 
                <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
                loader: () => fetch("/events.json")
            },
            {
                path: "/team",
                element: <Team></Team>,
                loader: () => fetch("team.json")
            },
            {
                path: "/aboutUs",
                element: <HomeAbout></HomeAbout>
            },
            {
                path: "/login",
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