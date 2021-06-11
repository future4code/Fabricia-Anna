import React from 'react'
import Styled from 'styled-components';

const ItemContainer = Styled.div`
display: flex;
align-items:center;
`

const Avatar = Styled.img `
border-radius:50%;
margin-right: 8px;
width: 30px;
height: 30px;

`

function Item(props) {
    const perfil= props.perfil
    return (
        <ItemContainer>
            <Avatar src={perfil.photo}/>
            <p>{perfil.name}</p>

        </ItemContainer>

    )
}

export default Item;