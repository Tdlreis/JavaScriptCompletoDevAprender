// Natureza dinamica de objetos 
const mouse = {
    cor: 'Red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI')
}
console.log(mouse)

delete mouse.velocidade;
console.log(mouse)
