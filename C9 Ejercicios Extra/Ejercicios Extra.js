/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arr1 = [];
  for (const key in objeto) {
    if (Object.hasOwnProperty(key)) {
      arr1.push([key,objeto[key]]);
    }
  }
  return arr1;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  arary1 = string.split("").sort();
  var resultado = {}; 
  var cont = 1;
  for (let index = 0; index < array1.length; index++) {
    var char = array1[index];
    if (resultado[char]) {
      resultado[char]++;
    }else{
      resultado[char] = 1;
    }
  }
  return resultado;

}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var mayusculas = ''; 
  var minusculas = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index].toUppperClase()) {
      mayusculas+= string[index];
    }else{
      minusculas+= string[index];
    }
    
  }
  return mayusculas + minusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var strNew = frase.split(" ").map(function(palabra) {
     return palabra.split("").reverse().join(""); 
    }).join(" "); 
    return strNew;
  }

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var strNumero = numero.toString();
  var strReversa = strNumero.split("").reverse().join("")
  if (strNumero === strReversa) { 
    return "Es capicua"; 
  } else { 
    return "No es capicua"; }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var strEliminar = ["a", "b" , "c"];
  var strBusqueda = string.split("");
  for (let index = strBusqueda.length - 1; index >= 0; index--) {
    switch (strBusqueda[index]) {
      case "a":
      case "b":
      case "c":
        strBusqueda.splice(index,1)
        break;  
    }  
  }
  return strBusqueda.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
