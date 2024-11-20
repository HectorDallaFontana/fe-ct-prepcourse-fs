function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var result=0;
  for (let index = 0; index < arrayOfNums.length; index++) {
    result+= arrayOfNums[index];
    
  }
  return result;
}

module.exports = agregarNumeros;
