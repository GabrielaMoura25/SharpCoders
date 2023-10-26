var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const N = parseInt(lines[0]);

let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

for (let i = 1; i <= N; i++) {
    let data = lines[i].split(' ');
    let quantia = parseInt(data[0]);
    let tipo = data[1];
    
    totalCobaias += quantia;
    
    if (tipo === 'C') {
        totalCoelhos += quantia;
    } else if (tipo === 'R') {
        totalRatos += quantia;
    } else if (tipo === 'S') {
        totalSapos += quantia;
    }
}

const percentualCoelhos = (totalCoelhos / totalCobaias * 100).toFixed(2);
const percentualRatos = (totalRatos / totalCobaias * 100).toFixed(2);
const percentualSapos = (totalSapos / totalCobaias * 100).toFixed(2);

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${percentualCoelhos} %`);
console.log(`Percentual de ratos: ${percentualRatos} %`);
console.log(`Percentual de sapos: ${percentualSapos} %`);