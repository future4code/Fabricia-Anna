function blog(){               
      
        const conteudoBlog = document.getElementById("conteudoblog")
        const img = document.getElementById ("img-post")
        const titulo = document.getElementById ("titulo-post")
        const autor = document.getElementById ("autor-post")
        const conteudo = document.getElementById("conteudo-post")

        if (titulo.value==="" && autor.value ==="" && conteudo.value==="") {
            alert("Campos em branco, por favor insira as informações")
          } 
          else {  

        const post = {
            Titulo: titulo.value,
            Autor: autor.value,
            Conteudo:conteudo.value,
        }   
        
        const ArrayBlogConteudo=[]
        ArrayBlogConteudo.push(post)
         

        conteudoBlog.innerHTML += `<h3>Titulo:${post.Titulo}</h3>`
        conteudoBlog.innerHTML += `<h3>Autor(a):${post.Autor}</h3>`
        conteudoBlog.innerHTML += `<h4>Conteúdo:${post.Conteudo}</h4>`

    }
        img.value=""
        titulo.value=""
        autor.value=""
        conteudo.value=""
}
