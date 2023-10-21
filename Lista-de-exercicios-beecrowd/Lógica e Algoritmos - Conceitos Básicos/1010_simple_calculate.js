var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let line1 = lines.shift().split(" ");
let line2 = lines.shift().split(" ");

const valor1 = parseInt(line1[1]) * parseFloat(line1[2]);

const valor2 = parseInt(line2[1]) * parseFloat(line2[2]);

const soma = (valor1 + valor2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${soma}`);