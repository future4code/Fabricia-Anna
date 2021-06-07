import React from 'react';
import Styled from 'styled-components';


const HomeCabecalho = Styled.div`
 { display: flex;    
   justify-content: space-between;  
   align-items: center;
   padding: 0 8px;
   margin-top:10px ;
   border: 1px solid white;
   border-right: none;
   border-left:none;
   border-top: none;
 
 }
 
 p{
    color: white;
    font-size: 20px;
    margin-top:05px;
    text-align:center;
    font-weight:bolder;    
 }

`


const Cabecalho = (props) => {
        return (
                <div>
                        <HomeCabecalho>
                                <button onClick={props.MudaTelaList}>Voltar</button>
                                <p>AstroMatch</p>
                                <button onClick={props.MudaTelaHome}>Lista</button>


                        </HomeCabecalho>
                </div>

        );

}

export default Cabecalho

