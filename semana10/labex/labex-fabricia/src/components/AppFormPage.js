import React from 'react'
import { Title, FormatFather, ContainerTitle } from '../Pages/ListTripsPage/ListTripStyled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonDiv = styled.div` 
display: flex;
justify-content: center;
justify-content: space-around;
margin-top: 13em;

button{
width: 100px;
height: 40px;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
background-color: purple;
color: white;
border-style:none;
:hover{
    background-color:#622162;
}
}
`

const InputAppForm = styled.form` 
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
margin-top: 10em;

`
const FormatInputApp = styled.input` 
width: 100%;
height: 30px;
border-radius: 10px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin: 0 0 15px 0;
opacity: 0.8;
`

const FormatSelecttApp = styled.select` 
width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
    opacity: 0.8;
`

const buttonalert = () => {
    alert('Aplicação enviada com sucesso!')
}

const BodyAppForm = () => {
    return (
        <FormatFather>
            <ContainerTitle>
            <Title>
                <p>Embarque numa viagem</p>
            </Title>
            </ContainerTitle>

            <InputAppForm>                
                
                <FormatSelecttApp>
                    <option value="viagem">Escolha uma Viagem</option>
                    <option value="marte">Marte</option>
                    <option value="jupirter">Júpiter</option>
                </FormatSelecttApp>
                <FormatInputApp placeholder={"Nome"}/>
                <FormatInputApp placeholder={"Idade"} />
                <FormatInputApp placeholder={"Texto do Candidato"} />
                <FormatInputApp placeholder={"Profissão"} />
                <FormatSelecttApp>
                    <option value="pais">Escolha um País</option>
                    <option value="BR">Brasil</option>
                    <option value="DE">Alemanha</option>
                </FormatSelecttApp>

            </InputAppForm>


            <ButtonDiv>
                <Link to="/trips/list">
                    <button>Voltar</button>
                </Link>
                <Link to="/trips/application">
                    <button onClick={buttonalert}>Enviar</button>
                </Link>
            </ButtonDiv>
        </FormatFather>

    )


}

export default BodyAppForm