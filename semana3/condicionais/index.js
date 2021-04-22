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
*/














