let cantidad=2;
let subtotal=precio*cantidad;
let impuesto=subtotal*0.07;
let totalFinal = subtotal+impuesto;

console.log(`Subtotal:`, subtotal.toFixed(2))
console.log(`Total con impuesto`, totalFinal.toFixed(2))