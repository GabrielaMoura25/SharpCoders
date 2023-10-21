var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let number1 = parseInt(lines.shift());
let number2 = parseInt(lines.shift());

const prod = number1 * number2;

console.log(`PROD = ${prod}`);