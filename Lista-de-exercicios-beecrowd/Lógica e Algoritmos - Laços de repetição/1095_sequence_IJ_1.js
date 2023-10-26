var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

for (let i = 1, j = 60; j >= 0; i += 3, j -= 5) {
    console.log(`I=${i} J=${j}`);
}