// Velocidade máxima de 70
// a cada 5Km acima do limite você ganha 1 ponto
// Math.floor();
// caso os pontos sejam maior que 12 a carteira é suspensa

console.log(verificarVelocidade(180))

function verificarVelocidade(velocidade) {
    let pontos=0;
    if (velocidade <= 70) {
        return 'ok'
    }
    else{
        pontos =+  Math.floor((velocidade - 70) / 5);
        if (pontos < 12) {
            return pontos;            
        }
        else{
            return "Carteira Suspensa"
        }
    }
}