// Strings (Objetos) objetos de prueba
let cadena = "Esta es una cadena de prueba prueba prueba";
let cadena2 = " Contact";
let cadena3 = "Esta";
let cadena4 = "prueba";
let cadena5 = "No"
let cadena6 = "MAYUSCULA"
let cadena7 = "minuscula"
let cadena8 = 123;
let cadena9 = "    PRUEBA     "
let nombres = ["Jose", "Pablo", "Mario"];
let numero = 100;


// Metodos de cadena
// Metodo de cadena contact, funciona para unir 2 cadenas de texto
let concat = cadena.concat(` asi se usa concat <br>`);
let concat2 = cadena.concat(`${cadena2}<br>`);
document.write(concat);
document.write(concat2);

// Metodo de cadena startsWith, funciona para validar el inicio de una cadena de texto
let startswith = cadena.startsWith(cadena3);
let startswith2 = cadena.startsWith(cadena2);
document.write("Asi se usa el metodo de cadena startsWith  " + startswith + "<br>");
document.write("Asi se usa el metodo de cadena startsWith  " + startswith2 + "<br>");

// Metodo de cadena endsWith, funciona para validar el fin de una cadena de texto
let endsWith = cadena.endsWith(cadena4);
let endsWith2 = cadena.endsWith(cadena3);
document.write("Asi se usa el metodo de cadena endsWith  " + endsWith + "<br>");
document.write("Asi se usa el metodo de cadena endsWith  " + endsWith2 + "<br>");

// Metodo de cadena includes, funciona para validar que una cadena contenga algo 
let includes = cadena.includes(cadena4);
let includes2 = cadena.includes(cadena5);
document.write("Asi se usa el metodo de cadena includes  " + includes + "<br>");
document.write("Asi se usa el metodo de cadena includes  " + includes2 + "<br>");

// Metodo de cadena indexOf, funciona para saber en que pocision se enceuentra una cadena 
let indexOf = cadena.indexOf(cadena4);
let indexOf2 = cadena.indexOf(cadena5);
document.write("Asi se usa el metodo de cadena indexOf  " + indexOf + "<br>");
document.write("Asi se usa el metodo de cadena indexOf  " + indexOf2 + "<br>");

// Metodo de cadena lastIndexOf, funciona para saber en que pocsiion se enceuentra el ultimo caracacter de  una cadena 
let lastIndexOf = cadena.lastIndexOf(cadena4);
let lastIndexOf2 = cadena.lastIndexOf(cadena5);
document.write("Asi se usa el metodo de cadena lastIndexOf  " + lastIndexOf + "<br>");
document.write("Asi se usa el metodo de cadena lastIndexOf  " + lastIndexOf2 + "<br>");

// Metodo de cadena padStart, funciona para rellenar la cadena al principio
let padStart = cadena.padStart(60, cadena4);
document.write("Asi se usa el metodo de cadena padStart  " + padStart + "<br>");

// Metodo de cadena padEnd, funciona para rellenar la cadena al final
let padEnd = cadena.padEnd(60, cadena4);
document.write("Asi se usa el metodo de cadena padEnd  " + padEnd + "<br>");

// Metodo de cadena repeat, funciona para repetir la cadena
let repeat = cadena.repeat(5);
document.write("Asi se usa el metodo de cadena repeat  " + repeat + "<br>");

// Metodo de cadena split, funciona para separar la cadena
let split = cadena.split(" ");
document.write("Asi se usa el metodo de cadena split  " + split[6] + "<br>");

// Metodo de cadena substring, funciona para ponerle un comienzo y un final a la cadena
let substring = cadena.substring(0, 30);
document.write("Asi se usa el metodo de cadena substring  " + substring + "<br>");

// Metodo de cadena toLoweCase, funciona para poner la candena minuscula
let toLowerCase = cadena6.toLowerCase();
document.write("Asi se usa el metodo de cadena toLowerCase  " + toLowerCase + "<br>");

// Metodo de cadena toUpperCase, funciona para poner la candena minuscula
let toUpperCase = cadena7.toUpperCase();
document.write("Asi se usa el metodo de cadena toUpperCase  " + toUpperCase + "<br>");

// Metodo de cadena toString, funciona para cambiar la variable a string
let toString = cadena8.toString();
document.write("Asi se usa el metodo de cadena toString  " + toString + 5 +  "<br>");

// Metodo de cadena trim, funciona para eliminar los espacios de una cadena y length se usa para saber la cantidad  de caracteres de una cadena
let trim = cadena9.trim();
document.write("Asi se usa el metodo de cadena trim y la propiedad length " + trim.length +  "<br>");

// Metodo de cadena trimEnd, funciona para eliminar los espacios del final de una cadena y length se usa para saber la cantidad  de caracteres de una cadena
let trimEnd = cadena9.trimEnd();
document.write("Asi se usa el metodo de cadena trimEnd y la propiedad length " + trim.length +  "<br>");

// Metodo de cadena trimStart, funciona para eliminar los espacios del principio de una cadena y length se usa para saber la cantidad  de caracteres de una cadena
let trimStart = cadena9.trimStart();
document.write("Asi se usa el metodo de cadena trimStart y la propiedad length " + trim.length +  "<br>");


// Metodos transformadores de array
// Metodo de array pop, funciona para eliminar el ultimo elemento del array y lo muestra
let pop = nombres.pop();
document.write("Asi se usa el metodo de array pop " + pop +  "<br>");

// Metodo de array shift, funciona para eliminar el primer elemento del array y lo muestra
let shift = nombres.shift();
document.write("Asi se usa el metodo de array shift " + shift +  "<br>");

// Metodo de array push, funciona para agregar un elemento al array
let push = nombres.push("Juana", "Petra", "Maria");
document.write("Asi se usa el metodo de array push " + push +  "<br>");

// Metodo de array reverse, funciona para invertir el orden del array
let reverse = nombres.reverse();
document.write("Asi se usa el metodo de array reverse " + reverse +  "<br>");

// Metodo de array unshift, funciona para ageregar elementos al array
let unshift = nombres.unshift("Josefa");
document.write("Asi se usa el metodo de array unshift " + unshift +  "<br>");

// Metodo de array sort, funciona para ordenar el array de manera alfabetica
let sort = nombres.sort();
document.write("Asi se usa el metodo de array sort " + sort +  "<br>");

// Metodo de array splice, funciona para eliminar y/o agregar nuevos elementos
let splice = nombres.splice(2, 3, "Julio", "Tovar");
document.write("Asi se usa el metodo de array splice " + splice +  "<br>");


// Metodos Accesores
// Metodo de array join, funciona para cambiar el array a una cadena de texto
let join = nombres.join(" - ");
document.write("Asi se usa el metodo de array join " + join +  "<br>");

// Metodo de array slice, funciona para seleccionar elemontos del array
let slice = nombres.slice(0,3);
document.write("Asi se usa el metodo de array slice " + slice +  "<br>");


// Metodos Repeticion
// Metodo de array filter, funciona para agregar cosas despues de cada vuelta por elementp y validar lo que quieras de un array
// nombres.filter(filter=>document.write("Asi se usa el metodo de array Filter" + filter + "<br>"));
let filter = nombres.filter(nombres => nombres.length > 5)
document.write("Asi se usa el motodo de array filter" + filter + "<br>")

// Metodo de array forEach, funciona para 
nombres.forEach( forEach=>document.write("Asi se usa el metodo de array forEach" +forEach + "<br>"));



// Objeto Math
// Metodos
// El metodo sqrt, funciona para sacar la raiz cuadrada
sqrt = Math.sqrt(numero);
document.write("Asi se usa el onjeto match sqrt " + sqrt + "<br>");

// El metodo sqrt, funciona para sacar la raiz cubica
cbrt = Math.cbrt(numero);
document.write("Asi se usa el onjeto match cbrt " + cbrt + "<br>");

// El metodo max, funciona para saber cual es el numero mas alto
max = Math.max(10,25,5,48,75,30,59,20,56,78,250,10);
document.write("Asi se usa el onjeto match max " +max + "<br>");

// El metodo min, funciona para saber cual es el numero mas bajo
min = Math.min(10,25,5,48,75,30,59,20,56,78,250,10);
document.write("Asi se usa el onjeto match min " + min + "<br>");

// El metodo random, funciona para mostrar un numero entre 0 y 1
random = Math.random() * 100;
document.write("Asi se usa el onjeto match random " + random + "<br>");

// El metodo round, funciona para redondear los numeros
round = Math.round(random);
document.write("Asi se usa el onjeto match round " + round + "<br>");

// El metodo round, funciona para redondear los numeros
floor = Math.floor(5.66659568489254548899999999999);
document.write("Asi se usa el onjeto match floor " + floor + "<br>");

// El metodo fround, funciona para redondear los numeros
fround = Math.fround(5.66659568489254548899999999999);
document.write("Asi se usa el onjeto match fround " + fround + "<br>");

// El metodo trunc, funciona para redondear los numeros
trunc = Math.trunc(5.66659568489254548899999999999);
document.write("Asi se usa el onjeto match trunc " + trunc + "<br>");


// Propiedades
// Pi
let PI = Math.PI;
document.write("Asi se muestra PI " + PI + "<br>");

// Raiz cuadrada de 1/2
let SQRT1_2 = Math.SQRT1_2;
document.write("Asi se muestra la raiz cuadrada de 1/2= " + SQRT1_2 + "<br>");

// Raiz cuadrada de 2
let SQRT2 = Math.SQRT2;
document.write("Asi se muestra la raiz cuadrada de 2= " + SQRT2 + "<br>");

// Constante Euler
let E = Math.E;
document.write("Asi se muestra la Constante de Euler " + E + "<br>");

// Logaritmo natural de 2
let LN2 = Math.LN2;
document.write("Asi se muestra el Logaritmo natural de 2= " + LN2 + "<br>");

// Logaritmo natural de 10
let LN10 = Math.LN10;
document.write("Asi se muestra el Logaritmo natural de 10= " + LN10 + "<br>");

// Logaritmo de E con base 2
let LOG2E = Math.LOG2E;
document.write("Asi se muestra el Logaritmo de E con base 2= " + LOG2E + "<br>");

// Logaritmo de E con base 10
let LOG10E = Math.LOG10E;
document.write("Asi se muestra el Logaritmo de E con base 10= " + LOG10E + "<br>");
