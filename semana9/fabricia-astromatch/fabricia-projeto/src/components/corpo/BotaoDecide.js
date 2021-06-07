import React from 'react';
import Styled from 'styled-components';


const BotaoFooter = Styled.div`
display: flex;
justify-content: space-around;

`
function BotaoDecide(props) {          
    
    return (
        <BotaoFooter>
            
                <button onClick ={props.BotaoNao}>Recusar</button>
                <button onClick ={props.BotaoSim}>Aceitar</button>

            
        </BotaoFooter>
    )
}

export default BotaoDecide;