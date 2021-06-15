//Combinar
const primeiro = [1,2,3];
const segundo = [4,5,6];

//combinar
const combinado = primeiro.concat(segundo);
console.log(combinado)

//dividir
const cortado = combinado.slice(1,3)
console.log(cortado)

//Spread
const combinado2 = [...primeiro,'a', ...segundo]
console.log(combinado2)
const clonado = [...combinado2];
console.log(clonado)