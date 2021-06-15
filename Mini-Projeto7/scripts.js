// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e de 5

somar(10);
function somar(limite) {
    let sum = 0;
    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum)
}