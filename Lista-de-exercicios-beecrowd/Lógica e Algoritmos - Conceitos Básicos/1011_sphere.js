var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pi = 3.14159;
const R = parseFloat(lines.shift());
const raio = Math.pow(R, 3);

const volume = ((4.0 / 3) * pi * raio).toFixed(3);

console.log(`VOLUME = ${volume}`);