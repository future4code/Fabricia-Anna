import React from 'react';


export default class Etapa1 extends React.Component {
    render() {
        return (
            <form>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input type="text" id="nome" />
                </div>
                <div>
                    <p>2. Qual sua idade?</p>
                    <input type="number" id="idade" />
                </div>
                <div>
                    <p>3. Qual seu e-mail?</p>
                    <input type="email" id="email" />
                </div>
                <div>
                    <p>4. Qual sua escolaridade?</p>
                    <select>
                        <option value="">Ensino Médio Completo</option>
                        <option value="">Ensino Médio Incompleto</option>
                        <option value="">Ensino Superior Completo</option>
                        <option value="">Ensino Superior Incompleto</option>
                    </select>

                </div>
                <p></p>
                <div>
                    <button onClick={this.props.proximaEtapa}>Próxima Etapa</button>
                </div>
            </form>

        )

    }

}

