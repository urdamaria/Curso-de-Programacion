// Elias Rivas
// 1 Perfil de Producto

const nombreProducto = "Tablet 10 pulgadas";
let precio = 450.99;
let stock = 25
const envioGratis = true

console.log(`Nombre del producto: ${nombreProducto}`);
console.log(`Precio: ${precio}`);
console.log(`Stock existente: ${stock}`);
console.log(`¿Envio Gratis? ${envioGratis}`);

// 2 Calculo total de compra

let cantidad = 2
let subtotal = precio * cantidad;
const iva = 0.07;
let total = subtotal + (subtotal * iva);
console.log(`El subtotal de la compra: ${subtotal.toFixed(2)}. Total de la compra ${total.toFixed(2)}`);

// 3 Verificacion de Edad para Conducir

let edadUsuario = 20

if (edadUsuario > 18) {
    console.log("Puedes obtener tu licencia de conducir.");
}

else {
    console.log("Aún no tienes la edad para obtener la licencia.");
}

// 4 Sistema de Semaforo
let colorSemaforo = "amarillo";

if (colorSemaforo == "verder") {
    console.log("Puede avanzar");
}
else if (colorSemaforo == "verder") {
    console.log("Reduzca la velocidad, precaución.");
}
else if (colorSemaforo == "verder") {
    console.log("Debe detenerse.");
}

// 5 Menu del dia

let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Lunes: Lentejas");
        break;

    case 2:
        console.log("Martes: Pollos al horno");
        break;
    case 3:
        console.log("Miercoles: Pescado a la plancha");
        break;
    case 4:
        console.log("Jueves: Pasta");
        break;
    case 5:
        console.log("Viernes: Paella");
        break;
    default:
        console.log("Día no válido para menú.");
        break;
}

// 6 Numeros pares
for (let index = 0; index <= 20; index += 2) {
    console.log(index);
}

// 7 Cuenta regresiva
let i = 10
while (i != -1) {
    
    console.log(i);
    i -= 1;
    if (i == 0) {
        console.log("DESPEGUE")
    }
}

// 8 El Reto
for (let index = 1; index < 50; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (index % 3 == 0) {
        console.log("Fizz");
    }
    else if (index % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(index);
    }
}

// 9 Suma de los primeros 100 numeros
let sumaTotal = 0;
for (let index = 0; index <= 100; index++) {
    sumaTotal += index;
}
console.log(sumaTotal);

// 10 Acceso a evento exclusivo
let edadUser = 19
let tieneEntrada = false

if (edadUser > 18 && tieneEntrada) {
    console.log("Acceso concedido");
}
else {
    console.log("Acceso denegado");
}