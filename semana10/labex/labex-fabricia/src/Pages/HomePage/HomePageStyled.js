import styled from 'styled-components'
import Img from '../../img/astronaut-galaxy.jpg'

export const HomePageImg = styled.body`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${Img});
background-size: cover;
width: 100%;
height:100vh;

h1 {
  color:white;
  margin-right: 300px;
  font-size: 100px;
}
`
export const IcoRocket = styled.div` 
  display: flex;  
  justify-content: center;  
  opacity: 0.6;
  width: 10px;
  height: 100px; 
  margin:10vh; 
  
`

export const IcoLogin = styled.div` 
  display: flex; 
  justify-content: center;   
  opacity: 0.6;
  width: 10px;
  height: 80px;   
  margin-right: 25em;
  margin-left: 20px; 
   
`
export const ButtonContainer = styled.div` 
  display: flex;  
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  width: 2vh;
  height: 2vh; 
  margin-right: 25em;
  margin-top: 20px;
   
`