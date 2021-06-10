import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../Hooks/useInput'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'


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
width: 35em;
height: 30px;
border-radius: 10px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin: 0 0 15px 0;
opacity: 0.8;
`

const FormatButton = styled.div`
display: flex;
justify-content: space-around;
margin-top: 3em;

button{    
width: 100px;
height: 40px;
font-size: 18px;
font-weight: bold;
border-radius: 20px;
background-color: purple;
color: white;
border-style:none;
:hover{
    background-color:#622162;
}
}
`
const LoginFormat = () => {
    const [email, handleEmail] = useInput("");
    const [password, handlePassword] = useInput("");
    const history = useHistory()

    const onClickLogin = () => {
        const body = {email, password};
        
        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/create");
        })
        .catch ((err) => 
            console.log(err.response.data)
        );
    };


    return (
        <FormatDiv>
            <FormatLoginForm>
                <form>
                    <FormatInput value={email} onChange={handleEmail} placeholder={"E-mail"} type={"email"} name={"email"} />

                    <FormatInput value={password} onChange={handlePassword} placeholder={"Senha"} type={"password"} name={"password"} />
                </form>

                <FormatButton>
                    <Link to="/">
                        <button>Voltar</button>
                    </Link>
                    
                    <button onClick={onClickLogin}>Entrar</button>
                    
                        
                    
                </FormatButton>


            </FormatLoginForm>
        </FormatDiv>

    )
}

export default LoginFormat