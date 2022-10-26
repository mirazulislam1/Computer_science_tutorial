import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../others/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import LeftSide from "../../Pages/LeftSide/LeftSide";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";



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
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path:'/category/:id',
                element:<LeftSide></LeftSide>
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
                path:'*',
                element:  <div>404 not found pages</div>
            }
          
        ]
       
    }
])