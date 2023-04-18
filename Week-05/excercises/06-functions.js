console.log('--EXERCISE 6: FUNCTIONS');

/*  a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('Exercise 6.a');
function addition(x, y) {
    return x + y;
};
var result = addition(2, 7);
console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar
el valor NaN como resultado. */

console.log('Exercise 6.b');
function additionTwo(x, y) {
    if (typeof(x || y) != 'number') {
        alert('Error: One of the parameters is not a number');
        return NaN;
    }
    else {
        return x + y;
    };
}
var resultTwo = additionTwo('hola', 7);
console.log(resultTwo);

/*  c. Crear una función “validateInteger” que reciba un número como parámetro y
devuelva verdadero si es un número entero. */

console.log('Exercise 6.c');
function validateInterger(interger) {
return interger % 1 === 0;
}
console.log(validateInterger(5.2))

/*  d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6.c
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar
el número convertido a entero (redondeado). */

console.log('Exercise 6.d');
function additionThree(x, y) {
    if (typeof(x && y) != 'number') {
        alert('Error: One of the parameters is not a number');
        return NaN;
    }
    else if (validateInterger(x) == false) {
        alert('Error: One of the parameters is not an interger');
        return Math.round(x)
    }
    else if (validateInterger(y) == false) {
        alert('Error: One of the parameters is not an interger');
        return Math.round(y)
    }
    else {
        return x + y;
    };
}
var resultThree = additionThree(7.5, 7);
console.log(resultThree);


/*  e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior. */

console.log('Exercise 6.e');
function valNumberInt(x, y) {
    return additionThree(x, y);
}
console.log(valNumberInt(6.5, 8));