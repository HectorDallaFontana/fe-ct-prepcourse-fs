function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var elementosVistos = new Set();

  for (let index = 0; index < numeros.length; index++) {
    if (elementosVistos.has(numeros[index])) {
      return numeros[index];
    }
    elementosVistos.add(numeros[index]);
  }
}

module.exports = encontrarElementoRepetido;