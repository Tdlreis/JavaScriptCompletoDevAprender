//Escreva função que usa dois numeros e retorna o maior

function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else if(num2 > num1){
        return num2;
    }
    else{
        return "Iguais";
    }
}

console.log(maiorNumero(1,2))
console.log(maiorNumero(2,1))
console.log(maiorNumero(1,1))