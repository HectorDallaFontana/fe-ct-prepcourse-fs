function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var resultados = []; 
  var sum = num;
  for (let index = 0; index < 10; index++) {
    sum += 2; 
    if (sum === index) {
      return "Se interrumpió la ejecución"; 
    } 
    resultados.push(sum);
  } 
  return resultados;
}

module.exports = breakStatement;
