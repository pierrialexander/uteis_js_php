const cep = document.querySelector("#cep");

/**
 * Faz a leitura do resultado retornado da API verifica e preenche os 
 * campos do formulário com os dados retornados.
 * @param {*} result 
 */
const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}


/**
 * Método que irá fazer o evento de consulta na api, após tirarmos o foco
 * do campo CEP.
 */
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then( response =>{ response.json()
        .then( data => showData(data)) 
    })
    .catch(e => console.log("Deu erro: " + e, message))

})