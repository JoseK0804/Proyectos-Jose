// Problema 1
// Guardar en una variable el ancho de la ventana
let ancho = window.screen.availWidth;

// Guardar en una variable el alto de la ventana
let alto = window.screen.availHeight;

// Muestra las dos variables y pregunta si quiere comprar
comprar = confirm(`El alto de esta pantalla es de ${alto} y el ancho de esta pantalla es de ${ancho}, deseas comprarla?`);

// Si dice que si, le preguntamos si esta seguro y si dice que si nuevamente
// le decimos compra exitosa y si dice que no le decimos compra cancelada
if (comprar) {
	confirmar = confirm(`Estas seguro de realizar esta compra?`);
	if (confirmar) {
		alert("Compra Realizada con exito");
	} else {
		alert("Compra Cancelada");
	}
} else {
	alert("Compra Cancelada");
}

// Problema 2
// Guardamos en una variable el protocolo de la pagina
const protocol = window.location.protocol;

// Guardamos en una variable el domino de la pagina
const dominio = window.location.hostname;

// Guardamos en una variable la ubiciacion del usuario dentro del dominoio de la pagina
const pathname = window.location.pathname;

// Guardamos en una variable la ubiciacion del usuario dentro del dominoio de la pagina
const url = window.location.href;

// Mostramos los datos en pantalla
alert(`Hola Cofla! Estas en un sitio web que tiene como protocolo: ${protocol}, tiene como dominio ${dominio}, esatas ubicado en esta parte del dominio ${pathname} y el link de la pagina es: ${url}`);

