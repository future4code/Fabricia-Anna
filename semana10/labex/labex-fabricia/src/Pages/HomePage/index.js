import React from 'react';
import IconRocket from '../../img/foguete.png'
import IconLogin from '../../img/login.png'
import { Link } from 'react-router-dom';
import {HomePageImg, IcoRocket, IcoLogin, ButtonContainer} from './HomePageStyled'





const HomePage = () => {
    return (

        <HomePageImg>   
           <h1>LabeX</h1>
               <ButtonContainer>
                   
               <Link to="/trips/list">
               <IcoRocket>                
                <img src={IconRocket} alt={"Viajar"} title={"Vamos Viajar?"} />                
            </IcoRocket>
            </Link>
            <Link to="/login">
            <IcoLogin>
                <img src={IconLogin} alt={"Entrar Admin"} title={"Acesso Restrito"} />
            </IcoLogin>
            </Link>
               </ButtonContainer>
           




        </HomePageImg>


    );
}

export default HomePage;