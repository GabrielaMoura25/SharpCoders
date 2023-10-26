var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const idadeEmDias = parseInt(lines.shift());

const anos = Math.floor(idadeEmDias / 365);
const meses = Math.floor((idadeEmDias % 365) / 30);
const dias = Math.floor((idadeEmDias % 365) % 30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);