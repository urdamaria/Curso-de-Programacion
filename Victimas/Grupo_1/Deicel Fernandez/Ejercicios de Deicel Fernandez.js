////Ejercicio Nº1
const  NombreProducto = "Tablet 10 pulgadas";
let precio = 450.99;
let stock = 25;
const EnvioGratis = true;

const producto = {
    nombre: NombreProducto,
    precioUnitario: precio,
    EnStock: stock,
    EnvioGratis: EnvioGratis,
}


console.log ("Nombre del producto: ", producto.nombre);


///Ejercicio 2

let Cantidad = 2;
let subtotal = Cantidad * precio;
let impuesto = 0.7;
let total = (subtotal * impuesto) + subtotal;

console.log("Al comprar 2 productos, el precio total es: ",total)


///Ejercicio 3

const edadUsuario = 20
let mensaje;

if (edadUsuario >= 18) {
    mensaje = "Puedes obtener tu licencia de conducir."
} else if (edadUsuario < 18) {
    mensaje = "Aún no tienes la edad para obtener la licencia."
} else if ( edadUsuario <= 0) {
    mensaje = "¡No es una edad valida!"
} else if ( edadUsuario >= 95) {
    mensaje = "¡No es una edad valida!"
}
console.log(`${mensaje}` )
/////Ejercicio 4

let colorSemaforo = "verde"
let mensaje1;

if (colorSemaforo == "verde") {
    mensaje1 = "Puede avanzar."
} else if (colorSemaforo == "amarillo") {
    mensaje1 = "Reduzca la velocidad, precaución."
} else if (colorSemaforo == "rojo") {
    mensaje1 = "Debe detenerse."
} else {
    mensaje1 = "Color no valido."
}
console.log(`${mensaje1}` )
