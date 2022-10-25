import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Courses></Courses>
            },
            {
                path:"login",
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
       
    }
])