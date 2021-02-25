// Crear una variable de Javascript con una clase de html
const boton = document.querySelector(".boton");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const contenedor = document.querySelector(".contenedor")
const item = document.querySelector(".item")

// Hacer un evento Click
// Ya no se usa mas asi
boton.onclick = ()=>{
	alert("Hola desde Javascript");
}

// Crear un evento Click con  "Function"
// Y haciendo que se ejecute una sola vez
boton2.addEventListener("click", saludar);
function saludar(){
	alert("Asi se hace con Fuction");
	boton2.removeEventListener("click",saludar);
}

// Crear un evento Click con una funcion flecha
// Psando el parametro E de evento
boton3.addEventListener("click", (e)=>{
		alert("Asi se hace con funciones Flecha");
		console.log(e);
});

// Crear un evento Click para probar el flujo de los eventos
contenedor.addEventListener("click", ()=>{
		alert("Hiciste Click en el contenedor");
});

// Crear un evento Click para probar el flujo de los eventos
item.addEventListener("click", ()=>{
		alert("Hiciste Click en el item");
});