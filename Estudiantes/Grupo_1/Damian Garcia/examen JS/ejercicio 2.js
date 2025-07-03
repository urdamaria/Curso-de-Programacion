let cantidadComprada = 2;
let precio = 50;
let subtotal = precio * cantidadComprada;
let impuesto = subtotal * 0.07;
let totalFinal = subtotal + impuesto;

console.log(`Subtotal: ${subtotal}`);
console.log(`Total con impuesto (7%): `, totalFinal.toFixed(2));