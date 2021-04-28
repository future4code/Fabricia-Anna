function blog(){
    const titulo = document.getElementById ("titulo-post").value
    const autor = document.getElementById ("autor-post").value
    const conteudo = document.getElementById("conteudo-post").value

    titulo.innerHTML += `<p>${titulo}</p>`
    autor.innerHTML += `<p>${autor}</p>`
    conteudo.innerHTML += `<p>${conteudo}</p>`

    console.log(titulo)
    console.log(autor)
    console.log(conteudo)

}