//  2. Strings 
// a
var texto = "programacionWeb";
console.log('Mayúsculas:', texto.toUpperCase());

// b
var texto2 = "desarrollador";
var primeros5 = texto2.substring(0, 5);
console.log('Primeros 5:', primeros5);

// c
var ultimos3 = texto2.substring(texto2.length - 3);
console.log('Últimos 3:', ultimos3);

// d
var texto3 = "lenguajedeprogramacion";
var mayusculas = texto3.substring(0, 1).toUpperCase() + texto3.substring(1).toLowerCase();
console.log('Capitalizado:', mayusculas);

// e
var texto4 = "River Plate campeon";
var posicionEspacio = texto4.indexOf(" ");
console.log('Posición espacio:', posicionEspacio);

// f
var texto5 = "metodologias agiles";
var espacio = texto5.indexOf(" ");
var palabraA = texto5.substring(0, espacio);
var palabraB = texto5.substring(espacio + 1);
var nuevaCadena =
  palabraA.substring(0, 1).toUpperCase() + palabraA.substring(1).toLowerCase() + " " +
  palabraB.substring(0, 1).toUpperCase() + palabraB.substring(1).toLowerCase();
console.log('Nueva cadena:', nuevaCadena);
