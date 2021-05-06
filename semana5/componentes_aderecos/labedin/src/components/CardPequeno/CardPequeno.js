import React from 'react';
import './CardPequeno.css'

function CardPequeno(contato) {
    return (
        <div className="cardmini-container">
            <img src={ contato.imagem } />
            <div>
                <h4>{ contato.nome } { contato.descricao }</h4>
                
            </div>
        </div>
    )
}

export default CardPequeno;