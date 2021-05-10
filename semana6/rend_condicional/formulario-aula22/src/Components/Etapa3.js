import React from 'react';

export default class Etapa3 extends React.Component {
    render() {
        return (
            <form>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <div>
                    <p>6. Por que você não terminou um curso de graduação?</p>
                    <input type="text" id="curso" />
                </div>
                <div>
                    <p>7.  Você fez algum curso complementar?</p>
                                
                <select>
                        <option value="">Nenhum</option>
                        <option value="">Curso Técnico</option>
                        <option value="">Curso de Inglês</option>
                        
                    </select>
                </div>
                <p></p>
                <div>
                    <button onClick={this.props.proximaEtapa}>Próxima Etapa</button>
                </div>
            </form>


        );
    }
}