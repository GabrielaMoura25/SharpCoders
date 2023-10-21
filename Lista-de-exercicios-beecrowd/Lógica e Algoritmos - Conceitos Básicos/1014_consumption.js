var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const X = parseInt(lines.shift());
const Y = parseFloat(lines.shift());

const consumoMedio = (X / Y).toFixed(3);

console.log(`${consumoMedio} km/l`);