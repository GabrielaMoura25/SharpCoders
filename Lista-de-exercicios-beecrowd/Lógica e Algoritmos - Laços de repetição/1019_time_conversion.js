var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const segundos = parseInt(lines.shift());

const hora = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const segundosRestantes = segundos % 60;

console.log(`${hora}:${minutos}:${segundosRestantes}`);