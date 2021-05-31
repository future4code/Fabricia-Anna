import React from "react"
import axios from "axios"
import styled from "styled-components"
import img from "./img/zen2.jpg"


const LayoutBody = styled.body `
display:flex;
justify-content: center;
text-align: center;
height: 50em;
background-image:url(${img});
background-size: cover;
`
const LayoutButton = styled.button `
border:transparent;
background-color: orange;
cursor: pointer;
border-radius: 0.5em;
width: 8em;
height: 3em;
`


export default class App extends React.Component {
  state = {
    activity:{}
  }

  getActivity = () => {
    axios.get ("https://www.boredapi.com/api/activity/")
    .then((res) => {    
      console.log (res.data)  
      this.setState ({activity: res.data})
    })
    .catch ((err) => {
      console.log(err);
    })
  }

  render() {
    const {activity, type} = this.state.activity
    return (  
      <LayoutBody>
      <div className="App">
        <h2>Está entediado?</h2>        
        <h3>Sorteie uma atividade!</h3>
        <LayoutButton onClick={this.getActivity}>Vamos lá!</LayoutButton>
        <p>{activity}</p>
        <p>Tipo: {type}</p>               
      </div>
      </LayoutBody>
    ) 
  }
    
  
}


