var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valor = parseFloat(lines.shift());

const mod100 = valor % 100;
const mod50 = mod100 % 50;
const mod20 = mod50 % 20;
const mod10 = mod20 % 10;
const mod5 = mod10 % 5;
const mod2 = mod5 % 2;
const moe1 = mod2 % 1;
const moe50 = moe1 % 0.50;
const moe25 = moe50 % 0.25;
const moe10 = moe25 % 0.10;
const moe5 = moe10 % 0.05;


const notas100 = Math.floor(valor / 100);
const notas50 = Math.floor(mod100 / 50);
const notas20 = Math.floor(mod50 / 20);
const notas10 = Math.floor(mod20 / 10);
const notas5 = Math.floor(mod10 / 5);
const notas2 = Math.floor(mod5 / 2);
const moedas1 = Math.floor(mod2 / 1);
const moedas50 = Math.floor(moe1 / 0.50);
const moedas25 = Math.floor(moe50 / 0.25);
const moedas10 = Math.floor(moe25 / 0.10);
const moedas5 = Math.floor(moe10 / 0.05);
const moedas01 = Math.floor(Math.round(moe5 / 0.01));

console.log('NOTAS:');
console.log(`${notas100} nota(s) de R$ 100.00`);
console.log(`${notas50} nota(s) de R$ 50.00`);
console.log(`${notas20} nota(s) de R$ 20.00`);
console.log(`${notas10} nota(s) de R$ 10.00`);
console.log(`${notas5} nota(s) de R$ 5.00`);
console.log(`${notas2} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${moedas1} moeda(s) de R$ 1.00`);
console.log(`${moedas50} moeda(s) de R$ 0.50`);
console.log(`${moedas25} moeda(s) de R$ 0.25`);
console.log(`${moedas10} moeda(s) de R$ 0.10`);
console.log(`${moedas5} moeda(s) de R$ 0.05`);
console.log(`${moedas01} moeda(s) de R$ 0.01`);