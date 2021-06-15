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

//Factory Function
function criarCelular(marcaCelular, tamanhoTela, capacidadedeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadedeBateria,
        ligar(){
            console.log("Fazendo ligção...")
        }
    }
}
const celular1 = criarCelular('Samsung', 5.5, 500);
console.log(celular1)

function Celular(marcaCelular, tamanhoTela, capacidadedeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadedeBateria = capacidadedeBateria,
    this.ligar = function(){
        console.log("Fazendo ligção...");
    }
}

const celular3 = new Celular('Samsung', 5.5, 500);
console.log(celular3);