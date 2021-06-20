import React from 'react'
import { Title, TextTrips, FormatFather, DivButton, ContainerTitle } from '../Pages/ListTripsPage/ListTripStyled'
import { Link } from 'react-router-dom'

const BodyListTrip = () => {
    const trips = [
        {
            "id": "0KyL69olbPtb0E45t5Rz",
            "planet": "Plutão",
            "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
            "durationInDays": 980,
            "date": "21/12/20",
            "name": "Picnic de Inverno em Plutão"
        },
        {
            "id": "5FVnmIPaVcosz44hZdM6",
            "description": "Uma viagem bem legal, na melhor época de marte",
            "durationInDays": 228,
            "name": "Festança Marciana",
            "date": "21/12/21",
            "planet": "Marte"
        },
        {
            "id": "YDIxhnZWNnY62isAEUPv",
            "name": "Surfando em Netuno",
            "description": "Nenhum surfista intergalático pode ficar fora dessa!",
            "planet": "Netuno",
            "durationInDays": 540,
            "date": "21/12/20"
        },
    ]
    return (
        <FormatFather>            

            <DivButton>
            <Link to="/">
                    <button>Voltar</button>
                </Link>
                <Link to="/trips/application">
                    <button>Viajar</button>
                </Link>
            </DivButton>

            <ContainerTitle>
            <Title>
                <p>LabeX Viagens</p>
            </Title>
            </ContainerTitle>
            

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
