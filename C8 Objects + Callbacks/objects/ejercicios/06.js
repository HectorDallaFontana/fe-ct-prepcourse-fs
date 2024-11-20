const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cont=0;
  for (const key in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, key)) {
      cont++;
      
    }
  }
  return cont;
};

module.exports = contarPropiedades;
