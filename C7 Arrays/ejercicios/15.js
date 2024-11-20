function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indice_mas_grande = 0;
  for (let index = 1; index < array.length; index++) {
    if (array[index]>array[indice_mas_grande]) {
      indice_mas_grande = index;
    }
    
  }
  return indice_mas_grande;
}

module.exports = encontrarIndiceMayor;
