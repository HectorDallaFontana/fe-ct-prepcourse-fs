function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var newArray=[];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = cb(array[index]);
    
  }
  return newArray;
}

module.exports = map;
