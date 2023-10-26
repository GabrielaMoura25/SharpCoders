var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let maior = parseInt(lines[0]);
let posicao = 1;

for (let i = 1; i < 100; i++) {
    const valor = parseInt(lines[i]);
    if (valor > maior) {
        maior = valor;
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);