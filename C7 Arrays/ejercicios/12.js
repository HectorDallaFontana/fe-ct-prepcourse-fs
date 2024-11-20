function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'string') {
      array[index]=array[index].toUpperCase();
    } 
  }
  return array;
}

module.exports = convertirStringAMayusculas;
