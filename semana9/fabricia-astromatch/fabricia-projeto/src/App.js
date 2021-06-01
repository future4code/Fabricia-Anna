import React from 'react';
import Styled from 'styled-components';
import Botao from './components/botoes/botoes';

import Cabecalho from './components/cabecalho/cabecalho'
import CorpoHome from './components/corpo/corpo';



const ContainerHome = Styled.div`
  display: flex;  
  flex-direction:column;  
  width: 400px;
  height: 60vh; 
  margin: 0 auto;
  margin-top: 20vh;
  padding: 0;
  background-image: linear-gradient(to right, #ef0b7c, #fb6e5a);
  
`


export default class App extends React.Component {
  render() {
    return (
      <div>
        <ContainerHome>
          <div>
            <Cabecalho />
          </div>
          <div><CorpoHome /></div>
          <div>
            <Botao />
          </div>

        </ContainerHome>

      </div>


    );
  }

}


