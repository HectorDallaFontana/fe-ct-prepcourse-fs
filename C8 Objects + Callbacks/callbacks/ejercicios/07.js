function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var result = arrayOfStrings.filter(function(elemento) {
      return elemento.startsWith('a');
   });
   return result;
}

module.exports = filter;
