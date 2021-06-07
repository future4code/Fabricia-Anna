import React from 'react';
import axios from 'axios'

function ResetaBotao (){
    const clickLimpa = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricia/clear')
    }
    return(
<button onClick = {clickLimpa}>ResetarLista</button>
    )

}

export default ResetaBotao;