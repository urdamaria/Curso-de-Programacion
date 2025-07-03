const nombreProducto = "Tablet 10 pulgadas";
let precio = 450.99;
let stock = 25;
const envioGratis = true;

console.log(`nombre del producto: ${nombreProducto}`);
console.log(`precio: ${precio}`);
console.log(`Stock: ${stock}`);
console.log(`¿Tienes envio gratis?: ${envioGratis}`);

const nombreProducto_2 = "2s tablet";
let compra = "2 tablet";
let Precio_2 = 500; 
let Stock_2 = 2;
let Subtotal=Precio_2*Stock_2;
let impuesto=70;
console.log(`Cliente compra 2s tablet`);
console.log(`subtotal + el impuesto : ${(Precio_2*Stock_2+impuesto)+impuesto}`);
