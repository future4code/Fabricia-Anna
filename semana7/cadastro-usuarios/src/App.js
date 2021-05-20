import React from "react"
import CadastroUsuarios from "./components/CadastroUsuarios"
import ListaUsuarios from "./components/ListaUsuarios"
import styled from "styled-components"

const layout = styled.h1`
text-align: center;
font-family: 'Courier New', Courier, monospace;
font-size: 80px;
`


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroUsuarios irParaLista = {this.irParaLista} />
      case "lista":
        return <ListaUsuarios  irParaCadastro = {this.irParaCadastro}/>
      default:
        <CadastroUsuarios />
    }

  }

  irParaCadastro = () =>{
    this.setState ({telaAtual: "cadastro"})
  }

  irParaLista = () =>{
    this.setState ({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        
        <layout>
          <h1>Labenusers</h1>
          </layout>
          
        {this.escolheTela()}
      </div>
    )
  }

}


