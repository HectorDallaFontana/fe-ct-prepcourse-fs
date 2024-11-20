function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var arr1 = str1.split("").sort();
   var arr2 = str2.split("").sort();

   if (arr1.length !== arr2.length) {
      return false;
   }
  
   for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
         return false;
      }
   }
   return true;

}

module.exports = esAnagrama;
