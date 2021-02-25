// Dar de alta el contenedor de Html en Javascript
const contenedor = document.querySelector(".container");

// Dar de alta una calse de HTML en una variable Javascript
const boton = document.querySelector(".boton");

// Colocar en mayuscula el valor que tiene el boton
boton.value = boton.value.toUpperCase();

// Funcion para crear las llaves
function crearLlave(nombre,modelo,precio){
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h2>${modelo}</h2>`;
	precio = `<h2 >${precio}</h2>`;
	return [img,nombre,modelo,precio];
}

// Dar de alta primera llave
// const llave = crearLlave("Llave","ASD877", "200");	

// Mostrar la primera llave
// document.write(llave[0], llave[1]);

// Mostrar la primera llave
// contenedor.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

// Funcion
const changeHiden = (number)=> {
	// Creando una variable a partir de la clase en HTML
	document.querySelector(".key-data").value = number;
}
// Crear un fragmento
let documentFragment = document.createDocumentFragment();

// Se crea un bucel que empieza en 1, se va a ejecutar 20 veces y en cada vuelta va a sumar 1
for (var i = 1; i <= 20; i++) {
// 	Hacer un numero random entre 0 y 10000 redondeado
	let modeloRandom = Math.round(Math.random()*10000);
//  Hacer un numero random entre 30 y 40 redondeado
	let precioRandom = Math.round(Math.random()*10+30);
// 	Dar de alta la llave con numeros random
	let llave = crearLlave(`Llave ${i}`,`Precio: ${precioRandom}$`, ` Modelo: ${modeloRandom}`);
//  Se crea un elemnto DIV
    let div = document.createElement("DIV");
// Enviar datos en un click
	div.addEventListener("click",()=>{changeHiden(modeloRandom)})
// Poder hacer "TAB" sobre los elementos 
	div.tabIndex = i;
// Añadir dos clases al div
    div.classList.add(`item-${i}`,'flex-item');
//  Mostrar la llave
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//   Se agregan todos los elementos del div al document fragment
	documentFragment.appendChild(div);
}

// Se agrega el document Fragment al contenedor
contenedor.appendChild(documentFragment);