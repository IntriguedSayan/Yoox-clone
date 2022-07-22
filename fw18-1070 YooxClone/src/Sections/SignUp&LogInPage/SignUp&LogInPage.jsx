import { Box } from "@chakra-ui/react";
import { useState } from "react";
import EmailSignUp from "../../Components/SignUp&LogIn/EmailSignUp";
import FooterSignUp from "../../Components/SignUp&LogIn/FooterSignUp";
import NavbarSignUp from "../../Components/SignUp&LogIn/NavbarSignUp";
import SocialSignUp from "../../Components/SignUp&LogIn/SocialSignUp";

const initData={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    genStatus:"",
    terms:""
}
export default function SignUpAndLogInPage(){
    const[signUpData,setSignUpData]=useState(initData)
    const[signUpDone,setSignUpDone]=useState(false)

    const handleChange=(e)=>{
        console.log(e)
        const{name,value}=e.target
    

        setSignUpData({
            ...signUpData,  [name]:value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(signUpData)

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