function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index]>10) {
      contador++;
    }
  }
  return contador;
}

module.exports = contarElementosMayoresA10;
