import React from "react"
import { ScreenContainer, LogoImage } from "./styled"
import logo from "../../assets/CARIMBO BEEF SANDUBA.png"
import SignUpForm from "./SignUpForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage = () => {
    useUnprotectedPage()
    
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm />        
        </ScreenContainer>



    )
}

export default SignUpPage