//Verbo + Substantivo
let corSite = "azul";
function resetaCor(){
    corSite = "";
};

function mudaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
}

console.log(corSite);
resetaCor();
console.log(corSite);
mudaCor("verde", "claro");
console.log(corSite);
