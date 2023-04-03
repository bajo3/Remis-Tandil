// variables
const precioBase = 50;
const precioDistancia = 10;
const precioTiempo = 1;
const descuento = 0.1;

//function
function calcularPrecio(distancia, tiempo) {
  let precio = precioBase + (distancia * precioDistancia) + (tiempo * precioTiempo);
  precio = aplicarDescuento(precio, descuento);
  return precio;
}

function aplicarDescuento(precio, descuento) {
  return precio * (1 - descuento);
}

//  remis
const Remis = {
  nombre: "MiRemis",
  direccion: "Calle Falsa 123",
  telefono: "555-1234"
};

// array de viajes
const viajes = [];

// agregando un nuevo viaje
function agregarViaje() {
  const distancia = parseInt(prompt("Ingrese la distancia en kilómetros:"));
  const tiempo = parseInt(prompt("Ingrese el tiempo de espera en minutos:"));
  const precio = calcularPrecio(distancia, tiempo);
  viajes.push({ distancia, tiempo, precio });
 alert("El precio del viaje es:" + precio);
 console.log("El precio del viaje es:", precio);
}

// filtrando viajes por distancia mínima
function filtrarPorDistancia(distanciaMinima) {
  const viajesFiltrados = viajes.filter(viaje => viaje.distancia >= distanciaMinima);
  console.log("Viajes con distancia igual o superior a", distanciaMinima, "km:");
  console.table(viajesFiltrados);
}

//funcion para buscar un viaje por precio exacto
function buscarPorPrecio(precioBuscado) {
  const viajeEncontrado = viajes.find(viaje => viaje.precio === precioBuscado);
  if (viajeEncontrado) {
    console.log("Viaje encontrado con precio de", precioBuscado, "pesos:");
    console.table(viajeEncontrado);
  } else {
    console.log("No se encontró ningún viaje con precio de", precioBuscado, "pesos.");
  }
}

// ejecutar el cotizador de viajes
while (true) {
  const opcion = prompt("Ingrese una opción:\n1. Agregar un viaje\n2. Filtrar viajes por distancia mínima\n3. Buscar un viaje por precio exacto\n4. Salir");
  if (opcion === "1") {
    agregarViaje();
  } else if (opcion === "2") {
    const distanciaMinima = parseFloat(prompt("Ingrese la distancia mínima en kilómetros:"));
    filtrarPorDistancia(distanciaMinima);
  } else if (opcion === "3") {
    const precioBuscado = parseFloat(prompt("Ingrese el precio exacto a buscar:"));
    buscarPorPrecio(precioBuscado);
  } else if (opcion === "4") {
    break;
  } else {
    alert("Opción inválida, por favor ingrese una opción del 1 al 4.");
  }
}
