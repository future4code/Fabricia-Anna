import React from 'react';

export default class Etapa2 extends React.Component {
    render() {
        return (
            <form>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <div>
                    <p>5. Qual curso?</p>
                    <input type="text" id="curso" />
                </div>
                <div>
                    <p>6. Qual a unidade de ensino?</p>
                    <input type="text" id="unidade" />
                </div>
                <p></p>
                <div>
                    <button onClick={this.props.proximaEtapa}>Próxima Etapa</button>
                </div>
            </form>


        );
    }
}

