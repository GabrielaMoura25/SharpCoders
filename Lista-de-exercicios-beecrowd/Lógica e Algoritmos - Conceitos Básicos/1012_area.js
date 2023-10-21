var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valor = lines.shift().split(" ").map(parseFloat);

const A = valor[0];
const B = valor[1];
const C = valor[2];

const triangulo = ((A * C) / 2).toFixed(3);
const circulo = (3.14159 * Math.pow(C, 2)).toFixed(3);
const trapezio = (((A + B) / 2) * C).toFixed(3);
const quadrado = (Math.pow(B, 2)).toFixed(3);
const retangulo = (A * B).toFixed(3);

console.log(`TRIANGULO: ${triangulo}`);
console.log(`CIRCULO: ${circulo}`);
console.log(`TRAPEZIO: ${trapezio}`);
console.log(`QUADRADO: ${quadrado}`);
console.log(`RETANGULO: ${retangulo}`);