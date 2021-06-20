import styled from 'styled-components'
import ImgEspaco from '../../img/espaco.jpg'


export const PageImg = styled.body`
background-image: url(${ImgEspaco});
background-size: cover;
width: 100%;
height:100vh;
`
export const FormatFather = styled.div `
display: grid;
grid-template-rows: 150px 80px;
justify-content: center;
align-items: center;
`

export const DivButton = styled.div ` 
display: grid;
justify-content: center;


button{
width: 100px;
height: 40px;
font-size: 20px;
font-weight: bold;
background-color: purple;
color: white;
border-style:none;
border-radius: 20px;

:hover{
    background-color:#622162;
}
}
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
margin: 30px 0;     
    p{
    
    color: black;
    font-size: 30px;
    font-weight: bold;
}
`
export const TextTrips = styled.div` 
background-color: white; 
width: 35em;
height: 200px; 
opacity: 0.5;  

p{
       
    color: black;
    font-size: 15px;
    font-weight: bold;
    margin-left: 15px;
} 
`