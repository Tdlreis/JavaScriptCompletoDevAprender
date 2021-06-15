//Switch
let permissao = "comum"; // comum, gerente,diretor

switch (permissao){
    case 'comum':
        console.log('Usuario comum')
        break
    case 'gerente':
        console.log('Usuario Gerente')
        break
    case 'diretor':
        console.log('Usuario diretor')
        break
    default:
        console.log('Usuario não reconhecido')
}