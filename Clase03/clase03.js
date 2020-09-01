var semana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

function diasSemana() {
  for (var i = 0; i < semana.length; i++) {
    if (i == 6) {
      alert("Domingo es el séptimo día ! :)");
    } else if (i % 2 == 0) {
      console.log(semana[i]);
    }
  }
}
