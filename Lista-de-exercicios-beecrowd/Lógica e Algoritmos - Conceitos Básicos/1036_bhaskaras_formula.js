var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valores = lines.shift().split(" ").map(parseFloat);

const A = valores[0];
const B = valores[1];
const C = valores[2];

const valor1 = Math.pow(B, 2) - 4 * A * C;

if (A === 0 || valor1 < 0){
    console.log("Impossivel calcular");
} else {
    const raiz = Math.sqrt(valor1);
    const divisao = 2 * A;

    const x1 = (-B + raiz) / divisao;
    const x2 = (-B - raiz) / divisao;

    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
}