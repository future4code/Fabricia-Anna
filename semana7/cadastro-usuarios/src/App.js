import React from "react"
import CadastroUsuarios from "./components/CadastroUsuarios"
import ListaUsuarios from "./components/ListaUsuarios"
import styled from "styled-components"
import img from "./img/fundo-colorido.jpg"

const LayoutTela = styled.div`
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 30px;
`
const LayoutTelaCorpo = styled.body`
display:flex;
justify-content: center;
height: 40em;
background-image:url(${img});
background-size: 90em;

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
      <LayoutTelaCorpo>
      <div>
        
        <LayoutTela>
          <h1>Labenusers</h1>
          </LayoutTela>
          
          
        {this.escolheTela()}
      </div>
      </LayoutTelaCorpo>
    )
  }

}


