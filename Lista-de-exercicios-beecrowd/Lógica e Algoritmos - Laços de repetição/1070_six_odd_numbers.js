var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const X = parseInt(lines.shift());

for(let i = X; i <= X + 11; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}