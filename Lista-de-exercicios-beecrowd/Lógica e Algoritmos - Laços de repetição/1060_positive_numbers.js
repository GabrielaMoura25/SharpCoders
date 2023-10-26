var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valor1 = lines.shift();
const valor2 = lines.shift();
const valor3 = lines.shift();
const valor4 = lines.shift();
const valor5 = lines.shift();
const valor6 = lines.shift();

let valoresPositivos = 0;

if (valor1 > 0) {
    valoresPositivos++;
}
if (valor2 > 0) {
    valoresPositivos++;
}
if (valor3 > 0) {
    valoresPositivos++;
}
if (valor4 > 0) {
    valoresPositivos++;
}
if (valor5 > 0) {
    valoresPositivos++;
}
if (valor6 > 0) {
    valoresPositivos++;
}

console.log(`${valoresPositivos} valores positivos`);