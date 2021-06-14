import React from 'react'
import HeaderPage from '../../components/header';
import {PageImg} from '../ListTripsPage/ListTripStyled'
import BodyAppForm from '../../components/AppFormPage'





const ApplicationFormPage = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>
           <BodyAppForm />

            </PageImg>
        </div>

    )
}

export default ApplicationFormPage