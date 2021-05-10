import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align:center; 
  `

class Etapa1 extends React.Component {
    state = {
        // Array vazio
        dados: [
            {
            }
        ],

        // variável no estado, guardando
        // os valores dos inputs que temos na tela
        valorInputNome: "",
        valorInputIdade: "",
        valorInputEmail: ""
    };

    adicionaPessoa = () => {
        // Colocamos em uma variavel o objeto que representa uma novo nome
        const novoNome = {
            // Puxamos da variavel de estado "valorInputNome" o nome dela
            nome: this.state.valorInputNome,
            idade: this.state.valorInputIdade,
            idade: this.state.valorInputIdade,

        };

        // Copia array de dados e adiciona uma pessoa no final
        const novoPessoas = [...this.state.dados, novoPessoas];

        // Define o estado "pessoas" como a variavel "novoPessoas"
        this.setState({ dados: novoPessoas });
    };

    onChangeInputNome = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de nome

        // Define o estado "valorInputNome" como o
        // valor atual do input, que vem do event
        this.setState({ valorInputNome: event.target.value });
    };
    onChangeInputIdade = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de idade

        // Define o estado "valorInputIdade" como o
        // valor atual do input, que vem do event
        this.setState({ valorInputIdade: event.target.value });
    };

    onChangeInputEmail = (event) => {
        // Essa função é chamada toda vez que algo é digitado
        // no input de email

        // Define o estado "valorInputEmail" como o
        // valor atual do input, que vem do event
        this.setState({ valorInputEmail: event.target.value });
    };

    render() {
        
        const listaDeComponentes = this.state.dados.map((dados) => {
            return (
                <p>
                    {dados.nome} - {dados.idade} - {dados.email}
                </p>
            );
        });

        return (
            <MainContainer>
                <div>
                    <h3>ETAPA 1 - DADOS GERAIS</h3>
                    <div>
                        <p>1. Qual seu nome?</p>
                        <input
                            
                            value={this.state.valorInputNome}
                            // Repare na função que é passada aqui no onChange
                            onChange={this.onChangeInputNome}
                        />
                    </div>

                    <div>
                        <p>2. Qual sua idade?</p>
                        <input
                            
                            value={this.state.valorInputIdade}
                            onChange={this.onChangeInputIdade}
                        />
                    </div>

                    <div>
                        <p>3. Qual seu email?</p>
                        <input
                           
                            value={this.state.valorInputEmail}
                            onChange={this.onChangeInputEmail}
                        />
                    </div>

                    <div>
                        <p>4. Qual a sua escolariedade?</p>
                        <select>
                            <option value="">Ensino Médio Completo</option>
                            <option value="">Ensino Médio Incompleto</option>
                            <option value="">Ensino Superior Completo</option>
                            <option value="">Ensino Superior Incompleto</option>
                        </select>
                    </div>

                    <p></p>
                    <div>
                        <button onClick={this.Etapa2}>Próxima Etapa</button>
                    </div>

                </div>

            </MainContainer>
        );
    }
}

export default Etapa1;
