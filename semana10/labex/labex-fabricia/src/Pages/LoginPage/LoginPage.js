import React from 'react'
import HeaderPage from '../../components/header';
import LoginFormat from '../../components/LoginFormat';
import {PageImg} from '../ListTripsPage/ListTripStyled'



const LoginPage = () => {
    return (
        <div>
            <HeaderPage />
            <PageImg>
            <LoginFormat />
            </PageImg>
        </div>

    )
}

export default LoginPage