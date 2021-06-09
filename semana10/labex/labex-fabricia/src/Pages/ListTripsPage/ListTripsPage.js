import React from 'react'
import { Link } from 'react-router-dom';
import HeaderPage from '../../components/header';
import {Title, TextTrips, PageImg} from './ListTripStyled'


const ListTrip = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>
                <Title>
                    <p>LabeX Viagens</p>
                </Title>
                <div>
                <Link to="/trips/application">
                    <button>Viajar</button>
                    </Link>
                </div>
                <TextTrips>
                    <p>Nome: PLANEJAMENTO</p>
                    <p>Descrição: Viagem com ida, volta e hospedagem espacial.</p>
                    <p>Planeta: Mercúrio</p>
                    <p>Duração: 70</p>
                    <p>Dados: 2032-12-12 </p>
                </TextTrips>


            </PageImg>
        </div>

    )
}

export default ListTrip