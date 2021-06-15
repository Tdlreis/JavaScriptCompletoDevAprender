//deletar elementos
const numeros = [1,2,3,4,5,6];

// Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

//inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//meio
const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);

//Esvasiando o Array
//Solução1 Array declarado em let
// numeros = {};

//Solução2
// numeros.length = 0;
// console.log(numeros);

// Solução3
// numeros.splice(0,numeros.length);
// console.log(numeros)

//Solução4
// while(numeros.length > 0){
//     numeros.pop();
// }
// console.log(numeros)
