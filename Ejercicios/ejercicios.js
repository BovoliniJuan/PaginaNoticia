// 1. Variables y Operadores
// a
var num1 = 1;
var num2 = 2;
var suma = num1 + num2;
console.log('Suma:', suma);

// b
var str1 = "River";
var str2 = "Plate";
var concatenacion = str1 + str2;
console.log('Concatenación:', concatenacion);

// c
var palabra1 = "Argentina";
var palabra2 = "Colombia";
var sumaLargos = palabra1.length + palabra2.length;
console.log('Suma de largos:', sumaLargos);


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


// ========== 3. Arrays ==========
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a
console.log('Meses 5 y 11:', meses[4], meses[10]);

// b
console.log('Ordenado:', meses.sort());

// c
meses.unshift("Inicio");
meses.push("Fin");
console.log('Agregado:', meses);

// d
meses.shift();
meses.pop();
console.log('Quitado:', meses);

// e
meses.reverse();
console.log(' Al reves:', meses);

// f
var unidos = meses.join("-");
console.log('Unido:', unidos);

// g
var copia = meses.slice(4, 11);
console.log('Copia Mayo-Noviembre:', copia);


// 4. If Else 
// a
var random = Math.random();
if (random >= 0.5) {
  alert("Greater than 0.5");
} else {
  alert("Lower than 0.5");
}

// b
var age = 45;
if (age < 2) {
  alert("Bebe");
} else if (age <= 12) {
  alert("Niño");
} else if (age <= 19) {
  alert("Adolescente");
} else if (age <= 30) {
  alert("Joven");
} else if (age <= 60) {
  alert("Adulto");
} else if (age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}


//  5. For 
// a
var palabras = ["mastantuono", "river", "messi", "armani", "driusi"];
for (var i = 0; i < palabras.length; i++) {
  alert("Palabra: " + palabras[i]);
}

// b
for (var i = 0; i < palabras.length; i++) {
  var palabra = palabras[i];
  alert("Mayuscula: " + palabra.charAt(0).toUpperCase() + palabra.slice(1));
}

// c
var sentence = "";
for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert("Frase completa: " + sentence.trim());

// d
var numeros = [];
for (var i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log('Array:', numeros);


// 6. Funciones 
// a
function sumaFunc(a, b) {
  return a + b;
}
var resultado = sumaFunc(5, 10);
console.log('Resultado suma:', resultado);

// b
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
console.log('Resultado suma validada:', sumaValidada(10, "abc"));

// c
function validarEntero(n) {
  return n % 1 === 0;
}
console.log('¿Es entero?:', validarEntero(5.5));

// d
function sumaConEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert(" Uno de los parámetros no es un numero");
    return NaN;
  }
  if (!validarEntero(a)) {
    alert("Primer numero no es entero, se redondea");
    a = Math.round(a);
  }
  if (!validarEntero(b)) {
    alert("Segundo numero no es entero, se redondea");
    b = Math.round(b);
  }
  return a + b;
}
console.log('Suma con enteros:', sumaConEnteros(5.8, 2.3));

// e
function redondearSiDecimal(n) {
  if (!validarEntero(n)) {
    alert("Numero no entero, se redondea");
    return Math.round(n);
  }
  return n;
}
function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parametros no es un numero");
    return NaN;
  }
  a = redondearSiDecimal(a);
  b = redondearSiDecimal(b);
  return a + b;
}
console.log('Suma final:', sumaFinal(3.2, 6.7));
