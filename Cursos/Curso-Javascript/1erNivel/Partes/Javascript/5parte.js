// Consola
// Funciones de registro
// Funciona para limpiar la consola
console.clear();

// Funciona para que tire un error por consola
console.assert(5 > 3);
console.assert(3 > 5);

// Funciona para mostrar un error por la consola
console.error("Has cometido un error!");

// Funciona para mostrar informacion por la consola
console.info("Funciona para mostrar informacion por la consola");

// Funciona para mostrar informacion por la consola
console.log("Funciona para mostrar informacion por la consola");

// Funciona para crear una tabla en la consola con un objeto o un array 
console.table([0,1,21,5,45,45,456,4,84,2,15,4,51,54,8,489,7,7])

// Funciona para mostrar un mensaje de advertencia por la consola
console.warn("Funciona para mostrar un mensaje de advertencia por la consola");

// Funciona para crear una tabla en la consola con un objeto o un array 
console.dir([0,1,21,5,45,45,456,4,84,2,15,4,51,54,8,489,7,7])

// Funciones de conteo
// Funciona para contar cuantas veces se ejecuta el count
console.count();
console.count();
console.count();
console.countReset();
console.count();

// Funciones de agrupacion
// Funciona para crear y eliminar grupos
console.group("Grupo");
console.group("Grupo del grupo");
console.group("Grupo del grupo del grupo");
console.groupEnd();
console.groupEnd();
console.groupEnd();


// Funciones de temporizacion
// Funciona para hacer un temporizador
console.time();
console.timeLog();
console.timeEnd();

// Como editar el css de la consola
console.log("%cHello World", "color: #fff; background: #000; padding: 20px; border: 5px solid #f00;")