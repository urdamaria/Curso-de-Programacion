const diaSemana= 2; // Puede ser "ADMIN", "EDITOR", "VIEWER"

console.log(`la comida de la semana del dia: ${diaSemana} es:.`);

switch (diaSemana) {
    case 1:
        console.log("Lunes: Lentejas");
        break; // 'break' es crucial para no seguir ejecutando los siguientes casos.
    case 2:
        console.log("Martes: Pollo al horno");
        break;
    case 3:
        console.log("Miércoles: Pescado a la plancha");
        break;
    case 4:
        console.log("Jueves: Pasta");
        break;
    case 5:
        console.log("Viernes: Paella");
        break;
    default: // Se ejecuta si ninguno de los casos anteriores coincide.
        console.log("Día no válido para menú.");
        break;
}