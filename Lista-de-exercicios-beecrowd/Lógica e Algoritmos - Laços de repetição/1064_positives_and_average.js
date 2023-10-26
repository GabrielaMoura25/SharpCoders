var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valor1 = parseFloat(lines.shift());
const valor2 = parseFloat(lines.shift());
const valor3 = parseFloat(lines.shift());
const valor4 = parseFloat(lines.shift());
const valor5 = parseFloat(lines.shift());
const valor6 = parseFloat(lines.shift());

let contador = 0;
let somaPositivos = 0;
if (valor1 > 0) {
    contador++;
    somaPositivos += valor1;
}
if (valor2 > 0) {
    contador++;
    somaPositivos += valor2;
}
if (valor3 > 0) {
    contador++;
    somaPositivos += valor3;
}
if (valor4 > 0) {
    contador++;
    somaPositivos += valor4;
}
if (valor5 > 0) {
    contador++;
    somaPositivos += valor5;
}
if (valor6 > 0) {
    contador++;
    somaPositivos += valor6;
}

const media = contador > 0 ? somaPositivos / contador : 0;

console.log(`${contador} valores positivos`);
console.log(media.toFixed(1));