var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const salary = parseFloat(lines.shift());
let imposto;

if (salary <= 2000) {
    console.log("Isento");
} else if (salary <= 3000) {
    imposto = (salary - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
} else if (salary <= 4500) {
    imposto = ((salary - 3000) * 0.18) + (1000 * 0.08);
    console.log(`R$ ${imposto.toFixed(2)}`);
} else {
    imposto = ((salary - 4500) * 0.28) + (1500 * 0.18) + (1000 * 0.08);
    console.log(`R$ ${imposto.toFixed(2)}`);
}
