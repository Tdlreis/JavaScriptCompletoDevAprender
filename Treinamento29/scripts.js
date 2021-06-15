//Arrays
const numeros = [1,2,3];

//Inicio
numeros.unshift(0);
console.log(numeros);
//Meio
numeros.splice(1,0,"a")
console.log(numeros)
//final
numeros.push(5);
numeros.push(5);
console.log(numeros)

//Encontrar primitivos
console.log(numeros.indexOf(5))
console.log(numeros.lastIndexOf(5))

console.log(numeros.indexOf !== -1);
console.log(numeros.includes(2))

//Encontrar tipos de referencia
const marcas= [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
]

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
})

console.log(marca)