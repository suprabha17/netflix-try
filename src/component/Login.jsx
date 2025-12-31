import { useState } from "react";
import Header from "./Header";

const Login=() => {
    const [isSignInFrom,setIsSignInFrom]=useState(true);
    const toggelForm=()=>{
        setIsSignInFrom(!isSignInFrom);
    }

return (
<div>
    <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_medium.jpg" alt="background Image" /></div>    
<form className="w-3/12 rounded-lg absolute p-12 bg-black centered mt-40 ml-130 opacity-80 text-white">
<h1 className="font-bold">{isSignInFrom?"Sign In":"Sign Up"}</h1>
    {!isSignInFrom && (<input type="text" placeholder="Full Name" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />)}
    <input type="text" placeholder="Email Address" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />
    <input type="password" placeholder="Password" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />
    <button className="p-4 my-4 bg-red-700 text-white px-4 py-2 rounded w-full">{isSignInFrom?"Sign In":"Sign Up"}</button>
    <div className="p-4 my-2" onClick={toggelForm}>{isSignInFrom?"New to netflix? Sign up now":"Already have an account?"}</div>
</form>
</div>  



)

}
export default Login;