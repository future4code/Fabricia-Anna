import React from 'react'
import HeaderPage from '../../components/header';
import { PageImg } from '../ListTripsPage/ListTripStyled'
import { useTripsList } from '../../Hooks/useTrips'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import {Link} from 'react-router-dom'





const AdminHomePage = () => {
    const trips = useTripsList()
    useProtectedPage()

    return (
        <div>
            <HeaderPage />

            <PageImg>
                <Link to={"/admin/trips/create"}>
                    <button>Criar Viagem</button>
                </Link>
            </PageImg>
        </div>

    )

}

export default AdminHomePage