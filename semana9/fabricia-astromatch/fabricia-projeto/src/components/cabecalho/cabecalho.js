import React from 'react';
import Styled from 'styled-components';

const HomeCabecalho = Styled.div `
 { display: flex;    
   justify-content:center;     
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


export default class Cabecalho extends React.Component {
    render() {
        return (
            <HomeCabecalho>
                
                    <p>AstroMatch</p>
                
            </HomeCabecalho>
        );
    }

}

