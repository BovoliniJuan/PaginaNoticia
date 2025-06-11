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
