import React from 'react'
import HeaderPage from '../../components/header';
import { PageImg } from './ListTripStyled'
import PageTripList from '../../components/PageTripList'


const ListTrip = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>
                <PageTripList />
            </PageImg>
        </div>

    )
}

export default ListTrip