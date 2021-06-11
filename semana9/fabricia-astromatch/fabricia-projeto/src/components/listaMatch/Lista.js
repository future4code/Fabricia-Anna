import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import Item from './Item';
import axios from 'axios'

const ListaContainer = Styled.div`
padding: 8px;
`

function Lista() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricia/matches')
            .then((res) => {
                setMatches(res.data.matches)
            })
            

    }, []);


    return (
        <ListaContainer>
            {matches.map((profile) => {
                return <Item perfil={profile} />
            })}

        </ListaContainer>
    )
}



export default Lista;