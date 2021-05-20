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
                    <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                </CardUsuarios>
            )

        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista Usuários</h2>
                {ListaUsuarios}
            </div>

        )


    }

}