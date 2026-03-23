import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { logo } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import {logo,avtarImage} from "../utils/constants";

const Header=()=>{

// Give me this piece of data from Redux, and re-render me when it changes.
const user = useSelector( store =>store.user);
const dispatch = useDispatch();
console.log(user);


    const navigate =useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        navigate("/");
        }).catch((error) => {
        console.log("Error signing out:", error);
});

        }
        useEffect(() => {
        const auth = getAuth();
        const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });



        // cleaning the function 

        return () =>{   
            // Unsubscribe from the listener when the component unmounts
            // This is handled automatically by onAuthStateChanged, but good practice to include
            unsubscribe();
        }

        },[]);
    return(
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center p-4">
        <img className="w-44" src={logo} alt="logo" />
        {user && (<div className="flex items-center">
            <img src={avtarImage} alt="user Icon" />
            <button onClick={handleSignOut} className="ml-4 bg-red-700 text-white px-4 py-2 rounded">Sign Out</button>
        </div>)}
        </div>
    )
}
export default Header;