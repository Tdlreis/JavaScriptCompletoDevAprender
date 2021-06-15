// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Keving',
    personagem: 'Homem de ferro'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for(let film in obj){
        if (typeof obj[film] == "string") {
            console.log(film, obj[film])
        }
    }
}