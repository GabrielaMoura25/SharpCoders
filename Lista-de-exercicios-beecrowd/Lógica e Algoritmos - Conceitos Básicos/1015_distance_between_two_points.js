var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const plano = lines.shift().split(" ").map(parseFloat);
const plano1 = lines.shift().split(" ").map(parseFloat);

const x1 = plano[0];
const y1 = plano[1];

const x2 = plano1[0];
const y2 = plano1[1];

const distancia = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);

console.log(distancia);