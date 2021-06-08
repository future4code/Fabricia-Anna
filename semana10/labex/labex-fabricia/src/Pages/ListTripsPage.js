import React from 'react'
import ImgSol from '../img/sol.jpg';
import styled from 'styled-components'
import HeaderPage from '../components/header';


const PageListTrip = styled.body`
display: flex;
background-image: url(${ImgSol});
opacity: 0.8;
background-size: cover;
width: 100%;
height:87.2vh;
`



function ListTrip() {
    return (
        <div>
            <HeaderPage />
            <PageListTrip>

            </PageListTrip>
        </div>

    )
}

export default ListTrip