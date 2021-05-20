import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuarios = styled.div`
display: flex;
justify-content: space-between;
width: 20em;
padding: 10px;
margin: 10px;
border: 1px solid black;
border-left:none;
border-right:none;
border-top:none;
`
const LayoutItem = styled.div `
text-align: center;
`

const LayoutButton = styled.button `
border-radius: 20px;
width: 80px;
height: 30px;
`

export default class ListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuario()
    }
    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "fabricia-santanna-paiva"
            }
        })
            .then((resposta) => {
                this.setState({ usuarios: resposta.data })
            })
            .catch((err) => {
                alert("Erro, tente novamente!")
            })        
         
    }
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        axios.delete(url, { 
            headers: {
                Authorization: "fabricia-santanna-paiva"
            }
        })

            .then((resposta) => {
                alert ("Usuário(a) deletado (a) com sucesso!")
                this.pegarUsuario()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }
    render() {

        const ListaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuarios key={user.id}>
                    {user.name}
                    <LayoutButton onClick={() => this.deletarUsuario(user.id)}>delete</LayoutButton>
                </CardUsuarios>
            )

        })
        return (
            <div>
                <LayoutItem>
                <LayoutButton onClick={this.props.irParaCadastro}>Voltar</LayoutButton>
                <h2>Usuários Cadastrados:</h2>
                {ListaUsuarios}
                </LayoutItem>
                
            </div>

        )


    }

}