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
