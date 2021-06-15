// Operadores Lógicos
// Operadores Lógicos e (&&) True quando os dois operandos forem true

console.log(true && true);
console.log(true && false);
console.log(false && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar)

// Operadores Lógicos ou (||) True quando um dos dois operandos forem true

console.log(true || true);
console.log(true || false);
console.log(false || false);

let maiorDeIdade2 = true;
let possuiCarteiraDeTrabalho2 = false;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
console.log(podeAplicar2)

// Operadores Lógicos not (!)
let candidatoRecusado = !podeAplicar;
let candidatoRecusado2 = !podeAplicar2;

console.log(candidatoRecusado);
console.log(candidatoRecusado2);
