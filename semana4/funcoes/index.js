//Exercícios de interpretação de código

//EXERCÍCIO 1
// a) Impresso 10 
// Impresso 50

// b) Ocorre erro na função, não é chamada a função.


//EXERCÍCIO 2
// a) A variável i começa com o valor 0, por ser menor que 2, conforme a condição estabelecida,  aponta e imprime o nome "Darvas" que se encontra na posição 0, ocorre o incremento e i vale 1. Verifica novamente a condição e realiza o mesmo processo e aponta para o nome "Caio" na posição 1 no array. Imprime Darvas e Caio.

// b) Não seria impresso Darvas e Caio, provavelmente ocorreria um erro por não chamar a função, podendo chamar os nomes Amanda e Caio ou as duas primeiras letras do nome Amanda por estar na posição 0 e 1.



//EXERCÍCIO 3
// a) Ela deixa salva uma array vazia e não imprime nada no console, melhor nome array vazia


//EXERCÍCIO 4
// a)
/*
  function dados(){ //função com suas variáveis
  console.log(`Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.`) // imprime no console a frase apontando suas variáveis
}

dados()// chamando a função
*/

// b)

  function dados(nome, idade, local, profissao){ //função com suas variáveis
    nome=prompt("Qual o seu nome?")
    idade= Number (prompt("Qual a sua idade?"))
    local= prompt ("Qual cidade reside?")
    profissao = Boolean (prompt(" Você é estudante [sou] ou [não sou]"))    

    if (profissao===true){
      profissao = "sou"
    }
    else{
      profissao="não sou"
    }
    
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${local} e ${profissao} estudante.`) // imprime no console a frase apontando suas variáveis
}

dados() // chamando a função





