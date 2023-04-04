let input = require('fs').readFileSync('stdin', 'utf8');
let valor = parseFloat(input);

const nota = [100, 50, 20, 10, 5, 2];
const moeda = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let qtdN = 0;
let qtdM = 0;


console.log("NOTAS: ");
for (let i = 0; i < nota.length; i++){
    qtdN = parseInt(valor/parseFloat(nota[i]));
    console.log(qtdN + 'nota(s) de R$ = ' + nota[i].toFixed(2));
    // valor = valor % nota[i]
    valor = valor - (qtdN * parseInt(nota[i]));
}

console.log("MOEDAS");
for (let j = 0; j < moeda.length; j++){
    qtdM = parseInt(valor.toFixed(2)/parseFloat(moeda[j]));
    console.log(qtdM + 'moeda(s) de R$ = ' + moeda[j].toFixed(2));
    // valor = valor % moeda[j] + 0.00001
    valor = valor - (qtdM * parseFloat(moeda[j]));
}

