import React from "react"
import CadastroUsuarios from "./components/CadastroUsuarios"
import ListaUsuarios from "./components/ListaUsuarios"

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
        <h1>Labenusers</h1>
        {this.escolheTela()}
      </div>
    )
  }

}


