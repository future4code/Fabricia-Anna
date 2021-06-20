import React from 'react'
import HeaderPage from '../../components/header';
import { PageImg } from '../ListTripsPage/ListTripStyled'
import { useTripsList } from '../../Hooks/useTrips'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { Link } from 'react-router-dom'
import { ContainerDelTrip } from './styled';
import { ContainBody, ButtonContainer } from './styled'
import { ContainerTitle, Title, DivButton } from '../ListTripsPage/ListTripStyled';





const AdminTripList = () => {
    const trips = useTripsList()
    useProtectedPage()

    return (
        <div>
            <HeaderPage />

            <PageImg>
                <ContainerTitle>
                    <Title>
                        <p>Painel Administrativo</p>
                    </Title>
                </ContainerTitle>
                <ContainBody>
                    <DivButton>

                        <Link to={"/"}>
                            <button>Voltar</button>
                        </Link>

                        <Link to={"/admin/trips/create"}>
                            <button>Criar Viagem</button>
                        </Link>

                        <Link to={"/login"}>
                            <button>Sair</button>
                        </Link>


                    </DivButton>

                    <ContainerDelTrip>
                        <p>Viagem: Vênus</p>
                    </ContainerDelTrip>
                </ContainBody>

            </PageImg>
        </div>

    )

}

export default AdminTripList