import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../others/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
           
            {
                path:'course',
                element:<Courses></Courses>,
                loader: () => fetch('https://b610-lerning-platform-server-side-mirazulislam1.vercel.app/courses')
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-mirazulislam1.vercel.app/courses/${params.id}`)
            },
           
            {
                path:"login",
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'premium',
                element:<Premium></Premium>
            },
            {
                path:'*',
                element:  <div>404 not found pages</div>
            }
          
        ]
       
    }
])