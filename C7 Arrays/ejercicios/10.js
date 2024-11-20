function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'string' && array[index].length > 5 ) {
      return array[index];
    } 
  }
}

module.exports = obtenerPrimerStringLargo;
