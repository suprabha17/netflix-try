import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { logo } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import {logo,avtarImage,supported_languages} from "../utils/constants";
import {toggleGptSearch} from "../utils/GptSlice";
import {changeLanguage} from "../utils/ConfigSlice";

const Header=()=>{
const searchState = useSelector(store => store.gpt?.showgptSearch);
console.log("searchState : ",searchState);

// Give me this piece of data from Redux, and re-render me when it changes.
const user = useSelector( store =>store.user);
const dispatch = useDispatch();


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

        const handleGptSearch=()=>{
            dispatch(toggleGptSearch());
        }

        const handleLanguage=(e)=>{
            console.log("Selected language: ",e.target.value);
            dispatch(changeLanguage(e.target.value));
        }
    return(
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center p-4">
        <img className="w-44" src={logo} alt="logo" />
        {user && (<div className="flex items-center">
            {searchState && (<select className="py-2 px-4 m-2 bg-red-700 text-white rounded" name="Select Lang" id="" onChange={handleLanguage}>
               {supported_languages.map(lang=> <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                </option>)}
            </select>)}
            <button onClick={handleGptSearch} className="py-2 px-4 m-2 bg-[oklch(45.3%_0.124_130.933)] text-white rounded">{searchState? "Homepage" : "smart search"}</button>
            <img src={avtarImage} alt="user Icon" />
            <button onClick={handleSignOut} className="ml-4 bg-red-700 text-white px-4 py-2 rounded">Sign Out</button>
        </div>)}
        </div>
    )
}
export default Header;