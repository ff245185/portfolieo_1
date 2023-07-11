import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Intro from "../components/Intro/Intro";
import Profile from "../Profile/Profile";

export const router = createBrowserRouter[(
    {
    path:'/',
    element:<App></App>,
    children:[
        {
            path:'/',
            element:<Intro></Intro>
        },
        {
         path:'/profile',
         element:<Profile></Profile>
        }
    ]
    }
)]