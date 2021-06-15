//for-in

const pessoa = {
    nome: 'Jorge',
    idade: 25
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

const cores = ['Vermelho', 'Azul', 'Verde']

for(let indice in cores){
    console.log(indice, cores[indice])
}

//for-of
for(let cor of cores){
    console.log(cor)
}