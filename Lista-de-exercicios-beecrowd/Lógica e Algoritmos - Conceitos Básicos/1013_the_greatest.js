var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const numbers = lines.shift().split(" ").map(Number);

const MAIORAB = (numbers[0] + numbers[1] + Math.abs(numbers[0] - numbers[1])) / 2;

const MAIOR = (MAIORAB + numbers[2] + Math.abs(MAIORAB - numbers[2])) / 2;

console.log(`${MAIOR} eh o maior`);