import Browse from "./Browse";
import {createBrowserRouter} from "react-router-dom";
import Login from "./Login";

const Body=() => {
    const appRouter= createBrowserRouter([
        { 
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }

    ])

 return (
 <div>
    <Login/>
    <Browse/>
 </div>)
 

}
export default Body;