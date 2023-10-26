var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

for (let i = 1; i <= 9; i += 2) {
    for (let j = 7; j >=5; j--) {
        console.log(`I=${i} J=${j}`);
    }
}