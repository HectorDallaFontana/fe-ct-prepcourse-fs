function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.every(item => typeof item === 'number')) {
    return array.sort((a, b) => a - b);
  }else if (array.every(item => typeof item === 'string')) {
    return array.sort((a, b) => a.localeCompare(b)); 
  }
}

module.exports = ordenarArray;
