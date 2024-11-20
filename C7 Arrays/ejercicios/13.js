function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var arraypar = [];
  let indice =0;
  for (let index = 0; index < array.length; index++) {
    
    if (array[index]%2 === 0) {
      arraypar [indice] = array[index];
      indice++;
    }
    
  }
  return arraypar;
}

module.exports = filtrarNumerosPares;
