import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';
import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align:center; 
  `

export default class App extends React.Component {
  state = {
    pagina: "paginaEtapa1"
  };

  proximaEtapa = () => {
    if (this.state.pagina === "paginaEtapa1") {
      this.setState({ pagina: "paginaEtapa2" });
    }
    else if (this.state.pagina === "paginaEtapa2") {
      this.setState({ pagina: "paginaEtapa3" });
    }
    else if (this.state.pagina === "paginaEtapa3") {
      this.setState({ pagina: "paginaFinal" });
    }
  }
  render() {
    const redPagina = () => {
      if (this.state.pagina === "paginaEtapa1") {
        return <Etapa1 proximaEtapa={this.proximaEtapa} />;
      } else if (this.state.pagina === "paginaEtapa2") {
        return <Etapa2 proximaEtapa={this.proximaEtapa} />;
      } else if (this.state.pagina === "paginaEtapa3") {
        return <Etapa3 proximaEtapa={this.proximaEtapa} />;
      }
      else if (this.state.pagina === "paginaFinal") {
        return <Final proximaEtapa={this.proximaEtapa} />;
      }

    }
    return (
      <MainContainer>
        <div className="App">
          {redPagina()}
        </div>
      </MainContainer>
    );
  }
}
