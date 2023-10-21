var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const number = parseInt(lines.shift());
const hour = parseInt(lines.shift());
const price = parseFloat(lines.shift());

const salary = (hour * price).toFixed(2);

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary}`);