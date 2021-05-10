import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align:center; 
  `

class Etapa2 extends React.Component {
    state = {
        // Array vazio
        dados: [
            {
            }
        ],

        // variável no estado, guardando
        // os valores dos inputs que temos na tela
        valorInputCurso: "",
        valorInputUnidade: ""
        
    };

    adicionainfo = () => {
        // Colocamos em uma variavel o objeto que representa uma novo nome
        const novoNome = {
            // Puxamos da variavel de estado "valorInputNome" o nome dela
            curso: this.state.valorInputCurso,
            unidade: this.state.valorInputUnidade,
            
        };

        // Copia array de dados e adiciona uma pessoa no final
        const novoInfo = [...this.state.dados, novoInfo];

        // Define o estado "pessoas" como a variavel "novoPessoas"
        this.setState({ dados: novoInfo });
    };

    onChangeInputNome = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de nome

        // Define o estado "valorInputNome" como o
        // valor atual do input, que vem do event
        this.setState({ valorInputCurso: event.target.value });
    };
    onChangeInputIdade = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de idade

        // Define o estado "valorInputIdade" como o
        // valor atual do input, que vem do event
        this.setState({ valorInputUnidade: event.target.value });
    };

    render() {
        
        const listaDeComponentes = this.state.dados.map((dados) => {
            return (
                <p>
                    {dados.curso} - {dados.unidade} 
                </p>
            );
        });

        return (
            <MainContainer>
                <div>
                    <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                    <div>
                        <p>5. Qual o curso?</p>
                        <input
                            
                            value={this.state.valorInputCurso}
                            // Repare na função que é passada aqui no onChange
                            onChange={this.onChangeInputCurso}
                        />
                    </div>

                    <div>
                        <p>6. Qual a unidade de ensino?</p>
                        <input
                            
                            value={this.state.valorInputUnidade}
                            onChange={this.onChangeInputUnidade}
                        />
                    </div>
                                    
                    <p></p>
                    <div>
                        <button onClick={this.adicionainfo}>Próxima Etapa</button>
                    </div>

                </div>

            </MainContainer>
        );
    }
}

export default Etapa2;