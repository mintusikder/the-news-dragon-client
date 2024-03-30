import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                
            }
        ]
    }
])