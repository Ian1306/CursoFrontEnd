//operadores de comparacion


//==
//=== este operador evalua
//<, <=
//>,>=
// !== este operador evalua el contenido

//ejercicios
let valorNumerico = 23;
let valorNumerico2 = 23;
let valorCaracter = "23";
let resultadoComparacion = valorNumerico == valorCaracter;
let resultadoComparacionEstricta = valorNumerico=== valorCaracter;
let resultadoComparacionMayorMenor = valorCaracter <= valorNumerico2;
let valorBooleano = true;
let valorBooleano2 = false;
let resultadoTodoNegacion = valorBooleano != valorBooleano2;



console.log("Comparacion Booleano");
console.log(resultadoTodoNegacion);

console.log("Comparacion estricta");
console.log(resultadoComparacionEstricta);

console.log("Comparacion suave");
console.log(resultadoComparacion);


console.log("Comparacion mayor o menor");
console.log(resultadoComparacionMayorMenor);

// ejemplo de operadores logicos


// || or
// && and
// ! diferente

let resultadoOperadorOr = valorNumerico == valorCaracter || valorNumerico <= valorNumerico2 ;
console.log("operador logico OR o ||");
console.log(resultadoOperadorOr);


let resultadoOperadorAND = valorNumerico == valorCaracter && valorNumerico <= valorNumerico2 ;
console.log("operador logico AND o &&");
console.log(resultadoOperadorAND);


let resultadoOperadorNEGACION = !(valorBooleano2);
console.log("operador logico negacuin o !");
console.log(resultadoOperadorNEGACION);



