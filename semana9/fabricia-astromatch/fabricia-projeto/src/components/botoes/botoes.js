import React from 'react';
import Styled from 'styled-components';


const CorpoFooter = Styled.div `

`
const BotaoFooter = Styled.button `
display: flex;    
justify-content:center;  
padding: 10px;
margin: 0 auto;
width: 0 auto;
`


const Botao = () =>  {
            return (
            <CorpoFooter>
                <BotaoFooter>Recusar</BotaoFooter>
                <BotaoFooter>Aceitar</BotaoFooter>
                
            </CorpoFooter>

        );
    
}

export default Botao