import { Alert, Box } from "@chakra-ui/react";
import { useState } from "react";
import AlertSuccess from "../../Components/SignUp&LogIn/AlertSuccess";

import EmailSignUp from "../../Components/SignUp&LogIn/EmailSignUp";
import FooterSignUp from "../../Components/SignUp&LogIn/FooterSignUp";
import NavbarSignUp from "../../Components/SignUp&LogIn/NavbarSignUp";
import SocialSignUp from "../../Components/SignUp&LogIn/SocialSignUp";


const initData={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    genStatus:false,
    terms:true
}
export default function SignUpAndLogInPage(){
    const[signUpData,setSignUpData]=useState(initData)
    let[signUpDone,setSignUpDone]=useState(false)

    const handleChange=(e)=>{
        let valueToUpdate;
        const{name,value,type,checked}=e.target
        if(type==="checkbox"){
             valueToUpdate=checked
        }else if(type==="radio"){
             valueToUpdate=checked
        }else{
         valueToUpdate=value
        }
        setSignUpData({
            ...signUpData,  [name]:valueToUpdate
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(signUpData)
        if(signUpData.firstName.length!==0&&signUpData.email.length!==0&&signUpData.lastName.length!==0&&signUpData.password.length!==0&&signUpData.genStatus!==false&&signUpData.terms!==false){
                signUpDone=true
                alert("Registration Successful")
                
        }

    }
    

    return(
        <Box>
        <NavbarSignUp/>
        <SocialSignUp/>
        <EmailSignUp handleChange={handleChange} handleClick={handleClick} />
        <FooterSignUp/>
        </Box>
    )
}