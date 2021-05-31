import React from "react"
import axios from "axios"
import styled from "styled-components"
import { thisExpression } from "@babel/types"

const LayoutTelaCadastro = styled.div`
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 20px;
border: 1px solid black;
width: 20em;
height: 10em;

`
const LayoutForm= styled.form`
display: grid;
justify-content: center;
align-content: center;
width: 20em;
`
const LayoutInput= styled.input`
width: 25em;
`

const LayoutButton2 = styled.button `
border-radius: 10px;
width: 90px;
height: 30px;
text-align: center;
`

export default class CadastroUsuarios extends React.Component {
    state = {
        nome: "",
        email: ""

    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "fabricia-santanna-paiva"
            }
        })
            .then((resposta) => {
                alert("Usuário(a) cadastrado(a) com sucesso!")
                this.setState({ nome: "", email: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }
    render() {
        return (
            
            <div>
                <LayoutTelaCadastro>
                
                <h2>Cadastro</h2>
                <LayoutForm>
                <LayoutInput
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                >
                </LayoutInput>

                <LayoutInput
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                >
                </LayoutInput>
                </LayoutForm>
                
                <LayoutButton2 onClick={this.fazerCadastro}>Cadastrar</LayoutButton2>
                <LayoutButton2 onClick={this.props.irParaLista}>Go Lista</LayoutButton2>
                </LayoutTelaCadastro>
            </div>
        )
    }
}