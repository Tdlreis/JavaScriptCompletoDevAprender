let faixas = [
    {tooltip: 'até R$700', minimo:0, maximo:700},
    {tooltip: 'de R$700 a R$1000', minimo:700, maximo:1000},
    {tooltip: 'R$1000 ou mais', minimo:1000, maximo:99999999999}
]

//ou
function criaFaixaPreco(tooltip, minimo, maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1,100),
    criaFaixaPreco('b', 1,100),
    criaFaixaPreco('c', 1,100)
]
console.log(faixas);
console.log(faixas2);