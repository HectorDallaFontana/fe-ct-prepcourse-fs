function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return Math.abs(num) >= 100 && Math.abs(num) < 1000;
}

module.exports = tieneTresDigitos;
