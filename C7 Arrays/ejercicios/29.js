function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  //var numFaltante=0;

  for (let index = 0; index < numeros.length -1; index++) {
    if (numeros[index+1] - numeros[index] !== 1) {
      return numeros[index] + 1;
    } 
  }
  return null;
}

module.exports = encontrarNumeroFaltante;