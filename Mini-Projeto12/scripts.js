//Igualdade de Objetos

function Enderco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const enderco1 = new Enderco('a', 'b', 'c');
const enderco2 = new Enderco('a', 'b', 'c');

function saoIguais(endereço1, enderco2){
    return enderco1.rua === enderco2.rua &&
            enderco1.cidade === enderco2.cidade
            enderco1.cep === enderco2.cep
}
console.log(saoIguais(enderco1, enderco2));

function temEnderecoMemoriaIguais(enderco1, enderco2){
    return enderco1 === enderco2;
}
console.log(temEnderecoMemoriaIguais(enderco1, enderco2));