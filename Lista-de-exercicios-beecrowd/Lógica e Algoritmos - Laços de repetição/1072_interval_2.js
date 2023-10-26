var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const N = parseInt(lines[0]);
let dentro = 0;
let fora = 0;

for (let i = 1; i <= N; i++) {
    let X = parseInt(lines[i]);
    if (X >= 10 && X <= 20) {
        dentro++;
    } else {
        fora++;
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);