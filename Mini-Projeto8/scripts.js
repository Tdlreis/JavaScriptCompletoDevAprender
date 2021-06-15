//Exercício Nota Escolar
// Obter a média a partir de uma array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const array= [50,50,100]

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let sum=0;
    for (let nota of notas) {
        sum += nota;
    }

    const media = sum/(notas.length)

    if (media < 60) {
        return "F"
    }
    if (media < 70) {
        return "D"
    }
    if (media < 80) {
        return "C"
    }
    if (media < 90) {
        return "B"
    }
    else {
        return "A"
    }
}
