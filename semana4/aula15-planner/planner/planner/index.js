function planner (){ //chamando essa função pega os elementos
const mytarefa = document.getElementById ('tarefa') //amarzena o elemento com id 'tarefa' na variavel mytarefa
const mydia = document.getElementById ('dias-semana')//armazena o elemento com id 'dias-semana' na variavel mydia
   if (mytarefa.value !== ""){ // Se o valor for diferente de vazio no input, realizar os comandos abaixo
      switch (mydia.value){
       case "domingo": // caso seja selecionado a opção domingo, será executado os comandos abaixo até o primeiro break
         const domingo = document.getElementById ('domingo') //pega o elemento no id domingo e armazena na variavel domingo
         domingo.innerHTML += `<li>${mytarefa.value}</li>`// o elemento em HTML recebe o valor armazenado em mytarefa
        break
        case "segunda":
         const segunda = document.getElementById ('segunda')
         segunda.innerHTML += `<li>${mytarefa.value}</li>`
        break
        case "terca":
         const terca = document.getElementById ('terca')
         terca.innerHTML += `<li>${mytarefa.value}</li>`
        break
        case "quarta":
         const quarta = document.getElementById ('quarta')
         quarta.innerHTML += `<li>${mytarefa.value}</li>`
        break
        case "quinta":
         const quinta = document.getElementById ('quinta')   
         quinta.innerHTML += `<li>${mytarefa.value}</li>`
        break
        case "sexta":
         const sexta = document.getElementById ('sexta')
         sexta.innerHTML += `<li>${mytarefa.value}</li>`
        break
        case "sabado":
        const sabado = document.getElementById ('sabado')
        sabado.innerHTML += `<li>${mytarefa.value}</li>`
        break       
                
      }

      mytarefa.value = "" //Input fica vazio
   }
   
}


   
   

