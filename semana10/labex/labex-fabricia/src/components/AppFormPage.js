import React from 'react'
import { Title, TextTrips, FormatFather } from '../Pages/ListTripsPage/ListTripStyled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonDiv = styled.div` 
display: flex;
justify-content: center;
justify-content: space-around;
margin-top: 10em;

button{
width: 100px;
height: 40px;
font-size: 20px;
font-weight: bold;
}
`

const BodyAppForm = () => {
    return (
        <FormatFather>
            <Title>
                <p>Embarque numa viagem</p>
            </Title>

            <TextTrips>
                <form>
                    <label>
                        Escolha seu sabor favorito:
                        
                <select>
                            <option value="Marte">Marte</option>
                            <option value="Vênus">Venus</option>

                        </select>
                    </label>
                </form>

            </TextTrips>
            <ButtonDiv>
                <Link to="/trips/list">
                    <button>Voltar</button>
                </Link>
                <Link to="/trips/application">
                    <button>Enviar</button>
                </Link>
            </ButtonDiv>
        </FormatFather>

    )


}

export default BodyAppForm