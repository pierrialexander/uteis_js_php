// efetuamos a requisição com async await.
async function loadPosts() {    
    let req = await fetch('http://jsonplaceholder.typicode.com/posts'); // faz a requisição
    let json = await req.json(); // com a resposta, executa o método json do body
    montarBlog(json); // monta na tela os dados
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


