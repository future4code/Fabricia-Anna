import React from 'react'
import styled from 'styled-components'

const FormatDiv = styled.div` 
display: grid;
justify-content: center;


`

const FormatLoginForm = styled.form` 
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
margin-top: 10em;

`

const FormatInput = styled.input` 
width: 100%;
height: 30px;
border-radius: 10px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin: 0 0 15px 0;
opacity: 0.8;
`
const LoginFormat = () => {
    return (
        <FormatDiv>
            <FormatLoginForm>
                <form>
                    <FormatInput placeholder={"E-mail"} type={"email"} name={"email"} />

                    <FormatInput placeholder={"Senha"} type={"password"} name={"password"} />
                </form>

            </FormatLoginForm>
        </FormatDiv>

    )
}

export default LoginFormat