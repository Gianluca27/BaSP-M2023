console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/*  a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
de ambos números en una 3er variable. */
console.log('Exercise 1.a');

var a = 25;
var b = 13;
var c = a + b;
console.log(c);

//   b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('Exercise 1.b')

var name = 'Gianluca';
var lastName = 'Agrano';
var fullName = name + ' ' + lastName;
console.log(fullName);

/*  c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length). */
console.log('Exercise 1.c')

var stringOne = 'Hola';
var stringTwo = 'Adios';
var stringThree = stringOne.length + stringTwo.length;
console.log(stringThree);