import styled from 'styled-components'
import Img from '../../img/espaco.jpg'


export const LoginPageImg = styled.body`
display: flex;
justify-content: center;
align-items: center;
background-image: url(${Img});
background-size: cover;
width: 100%;
height:100vh;

h1 {
  
  color:white;
  margin: -800px;
  font-size: 80px;
}

` 

export const FormatDiv = styled.div` 
display: flex;
justify-content: center;
margin-top: -210px;

`

export const FormatLoginForm = styled.form` 
display: flex;
flex-direction: column;
align-items: center;
width: 500px;


`

export const FormatInput = styled.input` 
width: 35em;
height: 30px;
border-radius: 10px;
padding: 4px 8px;
border-width: 1px;
border-color: gray;
margin:  15px ;
opacity: 0.8;
`

export const FormatButton = styled.div`
display: flex;
justify-content: space-between;
margin-top: 3em;

button{    
width: 100px;
height: 40px;
font-size: 18px;
font-weight: bold;
border-radius: 20px;
background-color: purple;
color: white;
border-style:none;
:hover{
    background-color:#622162;
}
}
`