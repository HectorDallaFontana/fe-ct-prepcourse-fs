function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto=1;
 for (let index = a; index <= b; index++) {
  producto*= index;
  
 }
 return producto;
}

module.exports = productoEntreNúmeros;