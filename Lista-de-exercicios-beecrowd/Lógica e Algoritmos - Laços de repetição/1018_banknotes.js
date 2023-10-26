var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valor = parseInt(lines.shift());

const modulo100 = valor % 100;
const modulo50 = modulo100 % 50;
const modulo20 = modulo50 % 20;
const modulo10 = modulo20 % 10;
const modulo5 = modulo10 % 5;
const modulo2 = modulo5 % 2;

const divisao100 = parseInt(valor / 100);
const divisao50 = parseInt(modulo100 / 50);
const divisao20 = parseInt(modulo50 / 20);
const divisao10 = parseInt(modulo20 / 10);
const divisao5 = parseInt(modulo10 / 5);
const divisao2 = parseInt(modulo5 / 2);
const divisao1 = parseInt(modulo2 / 1);

console.log(valor);
console.log(`${divisao100} nota(s) de R$ 100,00`);
console.log(`${divisao50} nota(s) de R$ 50,00`);
console.log(`${divisao20} nota(s) de R$ 20,00`);
console.log(`${divisao10} nota(s) de R$ 10,00`);
console.log(`${divisao5} nota(s) de R$ 5,00`);
console.log(`${divisao2} nota(s) de R$ 2,00`);
console.log(`${divisao1} nota(s) de R$ 1,00`);