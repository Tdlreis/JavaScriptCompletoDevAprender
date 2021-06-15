// Objeto Enderço

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEnderco(enderco){
    for (let chave in endereco) {
        console.log(chave, enderco[chave])
    }
}

exibirEnderco(endereco)