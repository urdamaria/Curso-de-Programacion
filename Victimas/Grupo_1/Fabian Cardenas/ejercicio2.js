//ejercicio 2
let precio1 = 450.99;
let cantidadComprada = 2;

let subtotal = precio1 * cantidadComprada;
let impuesta = subtotal * 0.07;
let totalFinal = subtotal + impuesta;

console.log(`subtotal:`, subtotal.toFixed(2));
console.log(`Total con impuesto:`, totalFinal.toFixed(2));