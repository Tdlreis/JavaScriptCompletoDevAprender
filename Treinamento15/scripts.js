// Comparação não bool
//Falsy
    //undefined
    // null
    //0
    //false
    // ''
    // Nan - not a number

//Truthy
    //Tudo que não é o de cima


let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil)