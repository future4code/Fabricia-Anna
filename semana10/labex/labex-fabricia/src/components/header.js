import React from 'react'
import styled from 'styled-components'
import IconeFoguete from '../img/foguete.png';
import IconeLogin from '../img/login.png'
import LogoLabex from '../img/labex.png'
import { Link } from 'react-router-dom'

const Header = styled.div`
display: flex;
background-color:purple;
width: 100%;
height: 22vh;
`
const IcoFoguete = styled.div` 
  display: flex;   
  width: 65px;
  height: 65px;   
  margin-left: 55em;
  margin-top: 40px;
  opacity: 0.8;
  
`
const IcoLogin = styled.div` 
 display: flex;   
  width: 50px;
  height: 50px;   
  margin-left: 2em;
  margin-top: 48px;
  opacity: 0.8;   
`
const Logo = styled.div` 
 display: flex;   
  width: 200px;
  height: 20vh;   
  margin-left: 3em;
  margin-top: 7px;
     
`

const HeaderPage = () => {
    return (
        <div>
            <Header>
            <Link to="/">
                <Logo>
                    <img src={LogoLabex} alt={"Home"} />
                </Logo>
                </Link>

                <Link to="/ListTrip">
                <IcoFoguete>
                    <img src={IconeFoguete} alt={"Viagem"} />
                </IcoFoguete>
                </Link>

                <Link to="/Login">
                    <IcoLogin>
                        <img src={IconeLogin} alt={"Admin"} />
                    </IcoLogin>
                </Link>
                


            </Header>

        </div >

    )
}

export default HeaderPage;