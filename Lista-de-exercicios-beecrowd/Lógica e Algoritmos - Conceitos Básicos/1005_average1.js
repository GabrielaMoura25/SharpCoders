var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

const media = ((A * 3.5 + B * 7.5) / 11).toFixed(5);

console.log(`MEDIA = ${media}`);