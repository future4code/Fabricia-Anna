/*Exercícios de interpretação de código
 Exercício 1
Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?
Resposta:
O código divide o número que o úsuario digitou por 2.
Ele evrifica se o resto da divisão é 0 (zero).
Para número par.
Para números ímpares.


Exercício 2
 a) O código serve para informar os valores da fruta que o usuário digitou, caso o usuário não digite nenhuma das frutas que tenha no código, o mesmo receberá como resposta o preço 5.

 b) Será impresso - O preço da fruta Maçã  é R$ 2.25

 c) Se retirar o break da Pêra, ele não irá imprimir o valor da Pêra, e sim, irá direto para o valor defaul, no caso, preco 5.


 Exercício 3
a) A primeira linha tem uma variável numero que está recebendo um Número digitado pelo usuário.

b) Se o usuário digitar o número 10, o mesmo receberá uma mensagem impressa com a seguinte informação: Esse número passou no teste. Se fosse o número -10, por estar abaixo do número 0, não irá aparecer nenhuma mensagem devido ao comando "let".

c)O escopo de função em JavaScript significa que todas as variáveis declaradas dentro de uma função são visíveis por todo o corpo da função, sendo assim, have´r mensagem de erro no console deivo uma função que não seja visível.



Exercício de escrita de código
Exercício 4

const idade = Number(prompt("Qual a sua idade?"))

if (idade>=18){
  console.log ("Você pode dirigir")
}
else {
  console.log ("Você não pode dirigir")
}



Exercício 5

const turno = prompt("Qual o tuno que você estuda? Digite por favor  M (matutino), V (Vespertino) ou N (Noturno)")

if (turno.toLocaleLowerCase() == "m"){
  console.log ("Bom dia!")
}
else if (turno.toLocaleLowerCase() == "v"){
  console.log ("Boa tarde!")
}
else if (turno.toLocaleLowerCase() == "n"){
  console.log ("Boa noite!")
}

Exercício 6


const turno = prompt("Qual o tuno que você estuda? Digite por favor  M (matutino), V (Vespertino) ou N (Noturno)")

switch (turno.toLocaleLowerCase()){
  case  "m":
  console.log ("Bom dia!")
break;

case  "v":
  console.log ("Boa tarde!")
break;

case "n":
  console.log ("Boa noite!")
break;

}

Execício 7

const filme= prompt("Qual o gênero de filme irão assistir?")
const valor= Number (prompt("Qual o valor do ingresso?"))

alert("O gênero escolhido foi " +filme+ " e o valor é "+valor)
const resposta=prompt("Aceitam assistir o filme? Sim ou não?")

if (resposta.toLocaleLowerCase()=="sim")
{
console.log("Bom filme!")
}
else {
  console.log("Escolha outro filme")
}

DESAFIO 1

const filme= prompt("Qual o gênero de filme irão assistir?")
const valor= Number (prompt("Qual o valor do ingresso?"))
const valorformatado= valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const snack=prompt("Qual lanche você vai comprar?")

alert("O gênero escolhido foi " +filme+ " e o valor é "+valorformatado)

const resposta=prompt("Aceitam assistir o filme? Sim ou não?")

if (resposta.toLocaleLowerCase()=="sim")
{
console.log("Bom filme! \n ...com "  +snack)
}
else {
  console.log("Escolha outro filme")
}

DESAFIO 2
*/
const nomecompleto= prompt("Qual o seu nome completo?")
const tipojogo= prompt("Esolha o tipo de jogo: IN para internacional ou \nDO para doméstico")
const etapajogo= prompt("Insira a etapa do jogo: SF-semi-final; \n DT-decisão de terceiro lugar ou \n FI-final")
const categoriajogo= Number (prompt("Qual categoria, 1, 2, 3 ou 4?"))
const quantingresso= Number(prompt("Quantos ingressos?"))
let valor = Number
let valor1 = Number 
let valor2 = Number 
let valor3 = Number 
let valor4 = Number 
let totalingresso = Number
let totalingressoin = Number



//DOMESTICO
if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 1)
{
  valor=1320
  valor1 = 1320*quantingresso
  let totalingresso = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " --- Dados da compra --- \n Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ " ingresos \n --- Valores --- \n Valor do ingresso:" +valor+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 2)
{
  valor2 = 880*quantingresso
  let totalingresso = valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 3)
{
  valor3 = 550*quantingresso
  let totalingresso = valor3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 4)
{
  valor4 = 220*quantingresso
  let totalingresso = valor4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}



else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 1)
{
  valor1 = 660*quantingresso
  let totalingresso = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 2)
{
  valor2 = 440*quantingresso
  let totalingresso = valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 3)
{
  valor3 = 330*quantingresso
  let totalingresso = valor3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 4)
{
  valor4 = 170*quantingresso
  let totalingresso = valor4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}


else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 1)
{
  valor1 = 1980*quantingresso
  let totalingresso = valor1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 2)
{
  valor2 = 1320*quantingresso
  let totalingresso = valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}

else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 3)
{
  valor3 = 880*quantingresso
  let totalingresso = valor3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}

else if (tipojogo.toLocaleLowerCase()=="do" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 4)
{
  valor4 = 330*quantingresso
  let totalingresso = valor4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingresso)
}
 
//INTERNACIONAL
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 1)
{
  valor1 = 321,95*quantingresso
  let totalingresso = valor1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 2)
{
  valor2 = 214,63*quantingresso
  let totalingresso = valor2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 3)
{
  valor3 = 134,14*quantingresso
  let totalingresso = valor3.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="sf" && categoriajogo == 4)
{
  valor4 = 53,65*quantingresso
  let totalingresso = valor4.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}



else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 1)
{
  valor1 = 160,97*quantingresso
  let totalingresso = valor1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
  
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 2)
{
  valor2 = 107,31*quantingresso
  let totalingresso = valor2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
  
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 3)
{
  valor3 = 80,48*quantingresso
  let totalingresso = valor3.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
 
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="dt" && categoriajogo == 4)
{
  valor4 =  41,46*quantingresso
  let totalingresso = valor4.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}


else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 1)
{
  valor1 = 482,92*quantingresso
  let totalingresso = valor1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
  
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 2)
{
  valor2 = 321,95*quantingresso
  let totalingresso = valor2.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
  
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 3)
{
  valor3 = 214,63*quantingresso
  let totalingresso = valor3.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
  
}
else if (tipojogo.toLocaleLowerCase()=="in" && etapajogo.toLocaleLowerCase()=="fi" && categoriajogo == 4)
{
  valor4 = 80,48*quantingresso
  let totalingresso = valor4.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log( " Nome do cliente: "+nomecompleto +"\n Tipo do jogo: "+tipojogo+ "\n Etapa do Jogo: "+etapajogo+"\n Categoria: "+categoriajogo+"\n Quantidade de ingressos: "+quantingresso+ "\n Valor do total ingresso: "+totalingressoin)
}























