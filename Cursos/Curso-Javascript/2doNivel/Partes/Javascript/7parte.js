// Abre una ventana con el link que coloques y guardarlo enn una variable
let ventana = window.open("https://music.youtube.com/");

// Close se usa para cerrar la ventana
ventana.close();

// Verificar si una ventana esta cerrada o no y guardarlo en una variable
let pregunta = ventana.closed;

// Mostrar por consola el resultado
console.log(pregunta);

// Alert funciona para mostrar un mensjae
window.alert("Funciona para mostrar un mensaje");

// Funcioma para imprimir la pantalla actual
window.print();

// Funciona para pedir un dato
window.prompt("Mandame un dato!");

// Funciona para hacerle una pregunta al usuaario y esperar una respuesta true o false
window.confirm("Estas seguro que quieres salir del sitio web?");

// Es ub elemento de window que nos dice las propiedades de la pantalla
const screen = window.screen;
console.log(screen);
document.write(`La pantalla horizontalmente mide: <b>${screen.availWidth}px</b> <br>`);

// Se usa para medir el borde izquierdo del navegador a la pantalla
const screenLeft = window.screenLeft;
document.write(`La distancia desde el borde izquierdo del navegador y la pantalla es de <b>${screenLeft}px</b> <br>`);

// Se usa para medir el borde de arriba del navegador a la pantalla
const screenTop = window.screenTop;
document.write(`La distancia desde el borde de arriba del navegador y la pantalla es de <b>${screenTop}px</b> <br>`);

// Te devuelve el scroll que haya hecho el usuario en X
const scrollX = window.scrollX;

// Te devuelve el scroll que haya hecho el usuario en Y
const scrollY = window.scrollY;

// Asi se muestra en pantalla
document.write(`El scroll que se ha hecho en X es de:  <b>${scrollX}px</b>	 y en Y se ha hecho:  <b>${scrollY}px</b>	 <br>`)

// Se usa para forzar un scroll en la pagina en el eje X y en el eje Y
// Probarlo en la consola ya que aca, no se ejecuta, porque ya se estan ejecutando otras acciones
window.scroll(0,300);

// Se usa apra colocar el tamaño con un tamaño especifico
// No funciona por terminos legales, hay que probarlo en un servidro propio
ventana.resizeBy(100,200);

// Se usa para agrandar o achicar el tamaño de la ventana
// No funciona por terminos legales, hay que probarlo en un servidro propio
ventana.resizeTo(100,200);

// Se usa para mover la ventana a un punto en especifico
// No funciona por terminos legales, hay que probarlo en un servidro propio
ventana.moveBy(100,200);

// Se usa para mover la ventana en el eje x y el eje Y
// No funciona por terminos legales, hay que probarlo en un servidro propio
ventana.moveTo(100,200);

// Se usa para saber la localizacion de la pagina
const href = window.location.href;
document.write(`El archivo se encuentra en:  <b>${href}</b>	 <br>`);

// Se usa para saber el nombre del dominio
// Probarlo en otra pagina ya que esta no tiene ningun dominio
const dominio = window.location.hostname;
document.write(`El nombre del dominio es  <b>${dominio}</b>	 <br>`);

// Se usa para saber en que parte del dominio estas
const pathname = window.location.pathname;
document.write(`Estamos en esta parte del dominio  <b>${pathname}</b> <br>`);

// Se usa para saber el protoclo de la pagina de Web par asbae rsi es un sitio seguro o no
const protocol = window.location.protocol;
document.write(`El protocolo es <b>${protocol}</b> <br>`);

// Se usa para cargar un nuevo documento
// Probarlo en la consola porque aca hace que te redireccione a otra pagina
// window.location.assign("https://qa-admindm.distritomoda.com.ar/");

// Stop hace que la ventana deje de cargarse
// Probarlo en la consola porque hace que deje de cargarse y no carga el archivo HTML
// window.stop();
