var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let pares = 0;

for (let i = 0; i < 5; i++) {
    const valor = parseInt(lines[i])
    if (valor % 2 === 0){
        pares++;
    }
}

console.log(`${pares} valores pares`);