const checkValidate =(email,password,name)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex= /^[a-zA-Z\s]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if(!nameRegex.test(name)){
        return {valid:false,message:"Insert name"}
    }
    if(!emailRegex.test(email)){
        return {valid:false,message:"Invalid email"}
    }
    if(!password.length){
        console.log("passwordRegex.test(password)",passwordRegex.test(password));
        
        return {valid:false,message:"add valid password"}
    }
    else{
    return {valid:true,message:null};
    }
}

export default checkValidate;
