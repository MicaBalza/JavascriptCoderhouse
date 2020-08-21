// numero = parseInt(prompt("Ingresa un numero por favor:"));

// if (numero > 1000) {
//   alert("Oh no! tu número es mayor a 1000 ºoº");
// }

// texto = prompt("Cuál es tu saludo favorito?");

// if (texto == "Hola") {
//   console.log("'Hola' también es mi saludo favorito!");
// }

numero = parseInt(prompt("Por favor ingresa un número :)"));

if (isNaN(numero)) {
  swal("Oh no!", "No ingresaste un número :(", "error");
} else {
  if (10 < numero && numero < 50) {
    swal("Tu número es mayor a 10 y menor a 50");
  } else if (numero <= 10) {
    swal("Tu número es menor o igual a 10");
  } else {
    swal("Tu número es mayor o igual a 50");
  }
}
