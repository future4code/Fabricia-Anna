import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { FormatButton, FormatInput, FormatLoginForm, FormatDiv, LoginPageImg } from '../LoginPage/LoginStyled'
import Header from '../../components/header'


const LoginPage = () => {
    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onClickLogin = (e) => {
        e.preventDefault()

        

        const body = {
            email: form.email,
            password: form.password
        };


        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricia-paiva/login", body)
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list");
            })
            .catch((err) =>
                alert("Acesso não concedido, verifique suas credenciais!")
            );
        cleanFields();
    };

    return (
        <div>
            <Header />            
            <LoginPageImg>
           
                <FormatDiv >
                    <FormatLoginForm onSubmit={onClickLogin}>
                                                    
                            <FormatInput
                                value={form['email']}
                                onChange={onChange}
                                placeholder={"E-mail"}
                                type={"email"}
                                name={"email"}
                                required
                            />

                            <FormatInput
                                value={form['password']}
                                onChange={onChange}
                                placeholder={"Senha"}
                                type={"password"}
                                name={"password"}
                                required
                                pattern={"^.{3,}"}
                                title={"Sua senha deve conter no mínimo 3 caracteres"}
                            />

                            <FormatButton>
                                <Link to="/">
                                    <button>Voltar</button>
                                </Link>

                                <button typy={'submit'}>Entrar</button>

                            </FormatButton>
                      
                    </FormatLoginForm>
                </FormatDiv>
            </LoginPageImg>

        </div>

    )
}

export default LoginPage


/*
import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

const LoginFormat = () => {

    const [form, onChange, cleanFields] = useForm({ email: "", password: "" })
    const history = useHistory()



    const onClickLogin = (e) => {
        e.preventDefault()

        console.log(form)

        const body = {
            email: form.email,
            password: form.password
        };


        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabricia-paiva/login", body)
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/create");
            })
            .catch((err) =>
                console.log(err.response.data)
            );
        cleanFields();
    };




    return (
        <FormatDiv >
            <FormatLoginForm >
                <form onSubmit={onClickLogin}>
                    <FormatInput
                        value={form['email']}
                        onChange={onChange}
                        placeholder={"E-mail"}
                        type={"email"}
                        name={"email"}
                        required
                    />

                    <FormatInput
                        value={form['password']}
                        onChange={onChange}
                        placeholder={"Senha"}
                        type={"password"}
                        name={"password"}
                        required
                        pattern={"^.{3,}"}
                        title={"Sua senha deve conter no mínimo 3 caracteres"}
                    />

                    <FormatButton>
                        <Link to="/">
                            <button>Voltar</button>
                        </Link>

                        <button>Entrar</button>

                    </FormatButton>

                </form>


            </FormatLoginForm>
        </FormatDiv>

    )
}

export default LoginFormat

*/