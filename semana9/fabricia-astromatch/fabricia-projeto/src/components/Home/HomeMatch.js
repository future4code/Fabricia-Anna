import React, { useState } from 'react'
import Styled from 'styled-components';
import Cabecalho from '../cabecalho/cabecalho';
import CorpoHome from '../corpo/corpo';
import Lista from '../listaMatch/Lista';


const ContainerHome = Styled.div`
  display: flex;  
  flex-direction:column;  
  width: 400px;
  height: 600px; 
  margin: 0 auto;
  margin-top: 20vh;
  padding: 0;
  background-image: linear-gradient(to right, #ef0b7c, #fb6e5a);  
`

const HomeMatch = (props) => {
  const [selecionaPagina, setSelecionaPagina] = useState('lhome')

  const mudaPagina = () => {
    switch (selecionaPagina) {
      case 'home':
        return <CorpoHome />
      case 'lista':
        return <Lista />
      default:
        return <CorpoHome />
    }
  }
  const MudaTelaList = () => {
    setSelecionaPagina("home")
  };

  const MudaTelaHome = () => {
    setSelecionaPagina("lista")
  };
  return (
    <div>
      <ContainerHome>

        <Cabecalho MudaTelaHome={MudaTelaHome}
         MudaTelaList={MudaTelaList} />
        {mudaPagina()}
      </ContainerHome>

    </div>

  );
}
export default HomeMatch