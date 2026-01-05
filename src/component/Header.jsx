import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header=()=>{
    const navigate =useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        navigate("/");
        }).catch((error) => {
        console.log("Error signing out:", error);
});
    }
    return(
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10 flex justify-between items-center p-4">
        <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div className="flex items-center">
            <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="user Icon" />
            <button onClick={handleSignOut} className="ml-4 bg-red-700 text-white px-4 py-2 rounded">Sign Out</button>
        </div>
        </div>
    )
}
export default Header;