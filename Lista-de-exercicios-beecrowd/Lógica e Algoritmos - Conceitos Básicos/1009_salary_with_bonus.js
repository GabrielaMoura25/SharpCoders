var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const saler = lines.shift();
const fixSalary = parseFloat(lines.shift());
const salesPerMonth = parseFloat(lines.shift());

const finalSalary = (salesPerMonth * 0.15 + fixSalary).toFixed(2);

console.log(`TOTAL = R$ ${finalSalary}`);