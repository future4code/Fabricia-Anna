function blog(){      //função inserida no onclick do botão         
      
    //declaração de variaves com o id de elementos HTML sendo armazenada
        const conteudoBlog = document.getElementById("conteudoblog") 
        const img = document.getElementById ("img-post")
        const titulo = document.getElementById ("titulo-post")
        const autor = document.getElementById ("autor-post")
        const conteudo = document.getElementById("conteudo-post")

        //Condição se os campos estiverem em branco e apertar o botão, aparece um alerta
        if (titulo.value==="" && autor.value ==="" && conteudo.value==="") {
            alert("Campos em branco, por favor insira as informações")
          } 
          else {  
         //Objeto armazenando os elementos
        const post = {
            Titulo: titulo.value,
            Autor: autor.value,
            Conteudo:conteudo.value,
        }   
         //array armazenando o objeto
        const ArrayBlogConteudo=[]
        ArrayBlogConteudo.push(post)
         
       //Não consegui imprimir o array, então inseri na <div> os elementos
        conteudoBlog.innerHTML += `<h3>Titulo:${post.Titulo}</h3>`
        conteudoBlog.innerHTML += `<h3>Autor(a):${post.Autor}</h3>`
        conteudoBlog.innerHTML += `<h4>Conteúdo:${post.Conteudo}</h4>`

    }
    //Input serem limpos, deixando-os em branco novamente.
        img.value=""
        titulo.value=""
        autor.value=""
        conteudo.value=""
}
