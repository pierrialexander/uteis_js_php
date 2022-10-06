function loadPosts() {
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json()
        })
        .then(function(json){
            // Montamos o html com os dados.
            montarBlog(json);
            //document.getElementById("posts").innerHTML = json.length + ' posts';
            console.log(json);
            
        })
        .catch(function(erro){
            console.log('Deu Problema ' + erro)
        })
}

// método que irá montar o HTML com o resultado retornado na resposta da requisição.
function montarBlog(lista) {
    let html = '';
    
    for(let i in lista){
        html += '<h3>' + lista[i].title + '</h3>';
        html += '<p>' + lista[i].body + '</p><br/>';
        html += '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;
}


