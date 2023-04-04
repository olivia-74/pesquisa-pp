
// 1035
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [A,B,C,D] = input.split(' ').map(x => parseInt(x)); // pega lista/array input (map) e coloca uma lista/array nova (parseInt). Substitui as linhas 6-9

            // var A = parseInt(lines[0]);
            // var B = parseInt(lines[1]);
            // var C = parseInt(lines[2]);
            // var D = parseInt(lines[3]);

if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && (A%2===0)){
    console.log("Valores aceitos");
}else{ 
    console.log("Valores nao aceitos");
};