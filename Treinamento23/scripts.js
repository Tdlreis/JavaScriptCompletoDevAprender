const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horisonta: 75
    },
    capacidadedeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligção...")
    }
}

const novoObjeto = Object.assign({
    bateria: 22
},celular);
console.log(novoObjeto)

const objeto2 = {...celular}
console.log(objeto2)