function convertir() {
  const input = document.querySelector(".input").value;
  const eleccion = document.getElementById("unit").value;

  const millasAKilometros = eleccion === "milesToKm";

  let resultado = 0;

  if (millasAKilometros === true) {
    resultado = input * 1.609;
  } else {
    resultado = input / 1.609;
  }

  document.querySelector(".respuesta").innerHTML = resultado;
}
