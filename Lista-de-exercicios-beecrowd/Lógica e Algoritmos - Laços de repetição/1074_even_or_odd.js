var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    const X = parseInt(lines[i]);
    if (X % 2 === 0 && X > 0){
        console.log('EVEN POSITIVE');
    } else if (X % 2 !== 0 && X > 0) {
        console.log('ODD POSITIVE');
    } else if (X % 2 === 0 && X < 0) {
        console.log('EVEN NEGATIVE');
    } else if (X === 0) {
        console.log('NULL');
    } else {
        console.log('ODD NEGATIVE');   
    }
}