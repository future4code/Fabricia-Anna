import React from 'react';
import Styled from 'styled-components'

const CartelaContainer=Styled.div `
margin: 16px;
`
const ImagemCartela = Styled.img `
width:100%;
max-height: 370px;
`

function Cartela(props) {
    return (
        <CartelaContainer>
            <ImagemCartela src={props.perfil.photo}/>
            <p>{props.perfil.name}, {props.perfil.age}</p>
            <p>{props.perfil.bio}</p>
        </CartelaContainer>
    )

}
export default Cartela;