console.log('--EXERCISE 2: STRINGS');

/*  a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('Exercise 2.a');
var lowerCase = 'administrators';
console.log(lowerCase.toUpperCase());

/*  b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Exercise 2.b');
var booster = 'accelerate';
var firstFive = booster.substring(0,5);
console.log(firstFive);

/*  c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('Exercise 2.c');
var systemStatus = 'actualized';
var lastThree = systemStatus.substring(7,10);
console.log(lastThree);

/*  d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('Exercise 2.d');
var fullString = 'checkpoint'
var firstLetter = fullString.substring(0,1);
var restOfString = fullString.substring(1,10);
var newString = firstLetter.toUpperCase() + restOfString.toLowerCase();
console.log(newString);

/*  e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la 
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('Exercise 2.e');
var country = 'united states';
var blankSpace = country.indexOf(' ');
console.log(blankSpace);

/*  f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la 
primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +). */

console.log('Exercise 2.f');
var position = 'staff manager';
var s = position.substring(0,1);
var taff = position.substring(1,5);
var m = position.substring(6,7);
var anager = position.substring(7,13);
var newPosition = s.toUpperCase() + taff.toLowerCase() + ' ' +  m.toUpperCase() + anager.toLowerCase();
console.log(newPosition);