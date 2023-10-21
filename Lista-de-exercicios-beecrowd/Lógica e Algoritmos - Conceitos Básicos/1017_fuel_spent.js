var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const hour = parseInt(lines.shift());
const speedMedia = parseInt(lines.shift());
const kmL = 12;

const distance = speedMedia * hour;

const quantityLitros = (distance / kmL).toFixed(3);

console.log(quantityLitros);