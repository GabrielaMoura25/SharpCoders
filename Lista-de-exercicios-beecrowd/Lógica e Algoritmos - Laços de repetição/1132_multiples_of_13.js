var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);

let soma = 0;

if (X > Y) {
    const temp = X;
    X = Y;
    Y = temp;
}
for (let i = X; i <= Y; i++) {
    if (i % 13 !== 0) {
        soma += i;
    }
}

console.log(soma);