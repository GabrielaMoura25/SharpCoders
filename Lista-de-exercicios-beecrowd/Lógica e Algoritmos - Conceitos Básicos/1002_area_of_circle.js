var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
 const pi = 3.14159;
 let raio = parseFloat(lines.shift());
 
 const area = (pi * Math.pow(raio, 2)).toFixed(4);
 
 console.log(`A=${area}`);