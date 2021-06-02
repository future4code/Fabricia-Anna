import React from 'react';
import Styled from 'styled-components';
import ListaMatch from '../listaMatch/ListaMatch';
import HomeMatch from '../Home/HomeMatch';

const HomeCabecalho = Styled.div `
 { display: flex;    
   justify-content:center;  
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

 button {
         display: flex;
         align-items:center;
         margin-left: 10px;
         margin-top: 5px;
         border:none;
         color:black;
         height: 30px;

 }
`


const Cabecalho = (props) => {    
        return (
            <HomeCabecalho>                
                    <p>AstroMatch</p>                      
                    <button onClick = {props.MudaTelaHome}>List</button>                       
                               
            </HomeCabecalho>
        );    

}

export default Cabecalho

