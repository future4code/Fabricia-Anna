import styled from 'styled-components'
import Img from '../../img/astronaut-galaxy.jpg'

export const HomePageImg = styled.body`
display: flex;
background-image: url(${Img});
background-size: cover;
width: 100%;
height:100vh;
`
export const IcoRocket = styled.div` 
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

export const IcoLogin = styled.div` 
  display: flex;  
  flex-direction:row;  
  justify-content: center;
  opacity: 0.6;
  width: 78px;
  height: 78px; 
  margin:20vh;
  margin-top: 41.7vh;
   
`