import React from 'react'
import HeaderPage from '../../components/header';
import {PageImg, ContainerTitle, Title} from '../ListTripsPage/ListTripStyled'


const CreateTripPage = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>

            <ContainerTitle>
                    <Title>
                        <p>Criar Viagem</p>
                    </Title>
                </ContainerTitle>
            
            </PageImg>
        </div>

    )
}

export default CreateTripPage