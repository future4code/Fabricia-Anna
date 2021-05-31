import React from "react"
import CadastroMusic from "./components/CadastroMusic"
import ListMusic from "./components/ListMusic"
import styled from "styled-components"
import imgHome from "./img/imgHome.jpg"


const HomePage = styled.body`
display: flex;
justify-content: center;
text-align: center;
background-image: url(${imgHome});
background-size: cover;
height: 39.1em;
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const ButtonHome = styled.button `
background-color: transparent;
border-radius: 5em;
padding: 1em;
color: white;
border-color: #aaaaaa;
cursor: pointer;
`
const TextH1 = styled.h1 `
margin-top: 2em;

`

export default class App extends React.Component {

  state = {
    telaAtual:"cadastro"
  }

  linkPage = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroMusic goLista = {this.goLista} />
        case "lista":
          return <ListMusic goPageCasdastro = {this.goPageCasdastro} />
        default:
          <CadastroMusic />
    }
    
  }

  goPageCasdastro = () => {
    this.setState({telaAtual:"cadastro"})   
  }

  goLista = () => {
  this.setState({telaAtual:"lista"})
  }

  render(){
    return (
      <HomePage>
        
      <div>   
        <TextH1>VAMOS CURTIR UM SOM?</TextH1>     
        <ButtonHome onClick={this.linkPage()}>GO</ButtonHome> 
        </div>
      </HomePage>
      
      
    );
  }
  
}


