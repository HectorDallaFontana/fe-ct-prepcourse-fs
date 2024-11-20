function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) return true;
  for (let index = 0; index < array.length; index++) {
    if (array[index] !== array[0]) { return false; } 
  } 
    return true; 
  }

module.exports = todosIguales;
