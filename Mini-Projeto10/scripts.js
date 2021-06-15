// Criar função para mostar os numeros primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let i = 2; i <= limite; i++) {
        if(numeroPrimo(i))  console.log(i);
    }
}

function numeroPrimo(numero) {
    for(let j = 2; j < numero; j++){
        if(numero % j === 0){
            return false
        }
    }
    return true
}