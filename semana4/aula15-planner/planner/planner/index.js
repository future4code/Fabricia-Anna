function planner (){
const mytarefa = document.getElementById ('tarefa')
const mydia = document.getElementById ('dias-semana')
    if (mytarefa.value === ""){ 
 }
 else { 
    switch (mydia.value){
       case "domindo":
         domingo.innerHTML += `<lu>${tarefa.value}</lu>`
        break
        case "segunda":
        segunda.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "terca":
        terca.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "quarta":
        quarta.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "quinta":
        quinta.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "sexta":
        sexta.innerHTML += `<li>${tarefa.value}</li>`
        break
        case "sabado":
        sabado.innerHTML += `<li>${tarefa.value}</li>`
        break
        
        break;
        
      }

   
   }
   mytarefa.value = ""
}
