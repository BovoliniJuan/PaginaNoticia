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