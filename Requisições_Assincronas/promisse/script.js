function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log('Pegando Temperatura');

        setTimeout(function(){
            resolve('40 na sombra')
        }, 2000);
    })
}

// USANDO A PROMISSE
let temp = pegarTemperatura();

temp
    .then(function(resultado){
        console.log("TEMPERATURA: " + resultado)
    })
    .catch(function(erro) {
        console.log("ERRO: " + erro)
    })


//console.log(temp)


