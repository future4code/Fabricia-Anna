import React from 'react'
import ImgEspaco from '../img/espaco.jpg';
import styled from 'styled-components'
import HeaderPage from '../components/header';


const PageLogin = styled.body`
display: flex;
background-image: url(${ImgEspaco});
;background-size: cover;
width: 100%;
height:87.2vh;
`



function LoginPage() {
    return (
        <div>
            <HeaderPage />
            <PageLogin>

            </PageLogin>
        </div>

    )
}

export default LoginPage