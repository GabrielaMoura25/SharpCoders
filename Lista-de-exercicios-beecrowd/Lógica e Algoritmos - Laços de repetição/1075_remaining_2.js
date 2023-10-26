var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const N = parseInt(lines.shift());

for (let i = 1; i < 10000; i++) {
    if (i % N === 2) {
        console.log(i);
    }
}