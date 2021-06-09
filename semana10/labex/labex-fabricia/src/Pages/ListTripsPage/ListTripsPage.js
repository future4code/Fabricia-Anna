import React from 'react'
import HeaderPage from '../../components/header';
import BodyListTrip from '../../components/PageTripList';
import { PageImg } from './ListTripStyled'


const ListTrip = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>
                <BodyListTrip />
            </PageImg>
        </div>

    )
}

export default ListTrip