import React from 'react';
import Img from '../img/astronaut-galaxy.jpg';
import styled from 'styled-components';
import IconeFoguete from '../img/foguete.png';
import IconeLogin from '../img/login.png'
import { Link } from 'react-router-dom';


const HomePageImg = styled.body`
display: flex;
background-image: url(${Img});
background-size: cover;
width: 100%;
height:100vh;
`
const IcoFoguete = styled.div` 
  display: flex;  
  flex-direction: row;
  justify-content: center;
  opacity: 0.6;
  width: 100px;
  height: 100px; 
  margin:5vh;
  margin-left: 45vh;
  margin-top: 40vh;
  
`

const IcoLogin = styled.div` 
  display: flex;  
  flex-direction:row;  
  justify-content: center;
  opacity: 0.6;
  width: 78px;
  height: 78px; 
  margin:20vh;
  margin-top: 41.7vh;
   
`

function HomePage() {
    return (

        <HomePageImg>   
           <Link to="/ListTrip">
            <IcoFoguete>                
                <img src={IconeFoguete} alt={"Viajar"} title={"Vamos Viajar?"} />                
            </IcoFoguete>
            </Link>
            <Link to="/Login">
            <IcoLogin>
                <img src={IconeLogin} alt={"Entrar Admin"} title={"Acesso Restrito"} />
            </IcoLogin>
            </Link>




        </HomePageImg>


    );
}

export default HomePage;