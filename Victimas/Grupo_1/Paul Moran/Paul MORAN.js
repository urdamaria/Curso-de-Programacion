const nombreProducto = "Tablet 10 pulgadas";
let precio = 450.99;
let stock = 15;
const disponible = true;

const producto = {
    nombre: nombreProducto,
    precioUnitario: precio,
    unidadesEnStock: stock,
    estaDisponible: disponible,
}

console.log ("nombre de el producto", producto.nombre);

////ejercicio 2 

let cantidad = 2; 
let subtotal = cantidad * precio; 
let impuesto = 0.7;
let total = (subtotal * impuesto) +subtotal;

console.log("al comprar 2 productos, el precio total es ",total)

/////ejercicio 3 

const edadusuario = 20 
let mensaje; 

if(edadusuario >= 18) {

} else if ( edadusuario <=18 ) {
    mensaje2 = "aun no tienes la edad para la licencia"
} else if ( edadusuario <=8 ) {
    mensaje3 = "no es una edad valida"
} else if ( edadusuario <=95) {
    mensaje4 = "no es una edad valida"
}

console.log(`${mensaje}`)