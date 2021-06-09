import React from 'react'
import { Title, TextTrips, FormatFather,DivButton } from '../Pages/ListTripsPage/ListTripStyled'
import { Link } from 'react-router-dom'



const BodyListTrip = () => {
    return (
        <FormatFather>
            <Title>
                <p>LabeX Viagens</p>
            </Title>

            <DivButton>
                <Link to="/trips/application">
                    <button>Viajar</button>
                </Link>
            </DivButton>

            <TextTrips>
                <p>Nome: PLANEJAMENTO</p>
                <p>Descrição: Viagem com ida, volta e hospedagem espacial.</p>
                <p>Planeta: Mercúrio</p>
                <p>Duração: 70</p>
                <p>Dados: 2032-12-12 </p>
            </TextTrips>
        </FormatFather>

    )


}

export default BodyListTrip
