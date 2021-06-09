import styled from 'styled-components'
import ImgEspaco from '../../img/espaco.jpg'



export const PageImg = styled.body`
display: flex;
background-image: url(${ImgEspaco});
background-size: cover;
width: 100%;
height:100vh;
`
export const Title = styled.div` 
display:flex; 
background-color: white;   
align-items: center;
justify-content: center;
width: 25em;
height: 50px;  
margin-top: 10vh;
opacity: 0.5;   

p{
    color: black;
    font-size: 30px;
    font-weight: bold;
}
`
export const TextTrips = styled.div` 
margin-top: 10em;
background-color: white; 
width: 35em;
height: 200px; 
opacity: 0.5;  

p{
       
    color: black;
    font-size: 15px;
    font-weight: bold;
} 
`