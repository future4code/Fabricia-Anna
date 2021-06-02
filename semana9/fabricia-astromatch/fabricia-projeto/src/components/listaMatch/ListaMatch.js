import React from 'react';
import Styled from 'styled-components'
import Cabecalho from '../cabecalho/cabecalho';

const ContainerList = Styled.div`
  display: flex;  
  flex-direction:column;  
  width: 400px;
  height: 60vh; 
  margin: 0 auto;
  margin-top: 20vh;
  padding: 0;
  background-image: linear-gradient(to right, #ef0b7c, #fb6e5a);  
`

const ListaMatch = () => {
    return (
 <ContainerList>
     <Cabecalho />
 </ContainerList>
    )
}

export default ListaMatch