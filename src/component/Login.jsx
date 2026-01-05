import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import checkValidate from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login=() => {
    const [isSignInFrom,setIsSignInFrom]=useState(true);
    const [errorMessage,setErrorMessage]=useState("");
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null);

    const toggelForm=()=>{
        setIsSignInFrom(!isSignInFrom);
    }

    const handleButtonClick=()=>{
        console.log("Button clicked");
        const message= checkValidate(email.current.value,password.current.value);
        setErrorMessage(message.message);
        console.log(message.message);
        
        console.log(password.current.value);
        
        if(message.message){
            return;
        }
        if (!isSignInFrom){
            // sign Up 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/browser");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-" +errorMessage); 
  });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-" +errorMessage); 
      });
        }   
        
    }

return (
<div>
    <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_medium.jpg" alt="background Image" /></div>    
<form onSubmit={(e)=>e.preventDefault()} className="w-3/12 rounded-lg absolute p-12 bg-black centered mt-40 ml-130 opacity-80 text-white">
<h1 className="font-bold">{isSignInFrom?"Sign In":"Sign Up"}</h1>
    {!isSignInFrom && (<input ref={name} type="text" placeholder="Full Name" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />)}
    <input type="text" ref={email} placeholder="Email Address" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />
    <input type="password" ref={password} placeholder="Password" className="rounded-md bg-grey p-4 my-2 border-1 w-full" />
    <p className="text-red-500">{errorMessage}</p>
    <button className="p-4 my-4 bg-red-700 text-white px-4 py-2 rounded w-full" onClick={handleButtonClick}>{isSignInFrom?"Sign In":"Sign Up"}</button>
    <div className="p-4 my-2" onClick={toggelForm}>{isSignInFrom?"New to netflix? Sign up now":"Already have an account?"}</div>
</form>
</div>  



)

}
export default Login;