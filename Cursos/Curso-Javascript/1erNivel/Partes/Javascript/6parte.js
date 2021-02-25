// Formas de seleccionar los elementos en Html
// Por ID
const ejemplo = document.getElementById("parrafo");
document.write(ejemplo + "<br>");
const ejemplo1 = document.querySelector("#parrafo");
document.write(ejemplo1 + "<br>");

// Por el nombre de la etiqueta
const ejemplo2 = document.getElementsByTagName("p");
document.write(ejemplo2 + "<br>");


// Por la clase
const ejemplo3 = document.querySelector(".parrafo");
document.write(ejemplo3 + "<br>");

// Por todos los elementos de la misma clase
const ejemplo4 = document.querySelectorAll(".parrafo");
document.write(ejemplo4 + "<br>");

// Guardar la clase de Html en una variable de Javascript
const ejemplo5 = document.querySelector(".rangeAge");

// Metodo set con atributos
ejemplo5.setAttribute("type", "text");

// Metodo get con atributos
const ejemplo6 = ejemplo5.getAttribute("type");
document.write(ejemplo6);

// Metodo para remover los atributos
ejemplo5.removeAttribute("type");

// Metodo para editar los atributo globales
const ejemplo7 = document.querySelector(".titulo");
const ejemplo8 = document.querySelector(".titulo2");
const ejemplo9 = document.querySelector(".titulo3");

// atributo para editar el texto de un elemento
ejemplo7.setAttribute("contentEditable", "true");

// Atributo para cambiar la direccion del texto
ejemplo7.setAttribute("dir", "rtl");

// Atributo para desaparecer un elemeto
ejemplo8.setAttribute("hidden", "false");

// Atributo para poder hacer focus a un elemento
ejemplo9.setAttribute("tabindex", "0");

// Atributo para poder hacer focus a un elemento
ejemplo9.setAttribute("title", "Ejemplo de titulo");


// Atributos de los inputs
const ejemplo10 = document.querySelector(".input_html");
const ejemplo11 = document.querySelector(".input_html2");
const ejemplo12 = document.querySelector(".input_html3");
const ejemplo13 = document.querySelector(".boton");
const ejemplo14 = document.querySelector(".input_html4");

document.write("<br>" + "ATRIBUTOS DEL INPUT" + "<br>");

// Atributo para saber el nombre de la clase
document.write(ejemplo10.className + "<br>");

// Atributo para saber lo que tiene adentro el input
document.write(ejemplo10.value + "<br>");

// Atributo para saber de que tipo es el input
ejemplo11.type = "color";
document.write(ejemplo11.type + "<br>");

// Atributo para colocar que formato acepta el input
ejemplo12.accept = "image/png";
document.write(ejemplo12.accept + "<br>")

// Atributo para colocar un minimo de caracteres que va a aceptar el input
ejemplo10.minLength = 10;
document.write(ejemplo10.minLength);

// Atributo para cambiar el texto de ejemplo dentro de un input
ejemplo14.placeholder = "Texto de ejemplo";

// Atributo para decir si un input es requerido o no
ejemplo12.required = "true"

// Atributo style (CSS)
const ejemplo15 = document.querySelector(".prueba");
ejemplo15.style.color = "#f00";
ejemplo15.style.backgroundColor = "#00f";

// ClassList add,para añadir una clase a un elemento
const ejemplo16 = document.querySelector(".ejemplo2");
ejemplo16.classList.add("grande");
ejemplo16.classList.add("bonito");

// ClassList remove,para eliminar una clase a un elemento
ejemplo16.classList.remove("bonito");

// ClassList item, para mostrar una calse
let mostrarClase = ejemplo16.classList.item(1);
document.write("<br>" + mostrarClase + "<br>");

// ClassList contains, para validar si una calse existe o no
let existeClase = ejemplo16.classList.contains("grande");
let existeClase2 = ejemplo16.classList.contains("NO");
document.write(existeClase + "<br>");
document.write(existeClase2 + "<br>");

// ClassList toggle, para eliminar una clase en csaso de tenerla y en caso contratio agregarla
ejemplo16.classList.toggle("bonito");

// ClassList replace, para cambiar una clase por otra
ejemplo16.classList.replace("bonito", "Nada");

// Obtencion y modificacion de elementos
const ejemplo17 = document.querySelector(".ejemplo3");

// textContent funciona para mostrar el contenido de una etiqueta sin css
let mostrarTexto = ejemplo17.textContent;
document.write(mostrarTexto + "<br>");

// innerText funciona para mostrar el contenido de una etiqueta (No se usa mas)
let mostrarTexto2 = ejemplo17.innerText;
document.write(mostrarTexto2 + "<br>");

// outerText funciona para mostrar el contenido de una etiqueta (No se usa mas)
let mostrarTexto3 = ejemplo17.outerText;
document.write(mostrarTexto3 + "<br>");

// innerHTML funciona para mostrar el contenido de una etiqueta con el estilo css y html
let mostrarTexto4 = ejemplo17.innerHTML;
alert(mostrarTexto4 + "<br>");

// // outerHTML funciona para mostrar el contenido de una etiqueta con el estio css y html, ademas muestra las clases y las etiquetas
let mostrarTexto5 = ejemplo17.outerHTML;
alert(mostrarTexto5 + "<br>");


// Crear elementos
// Crear vaios elementos sin consumir tantos recursos
// Colocarle el texto a un elemento
const contenedor = document.querySelector(".container");
const fragmento = document.createDocumentFragment();
for(i=0;i<20;i++){
const item = document.createElement("LI");
const textItem = document.createTextNode("Esto es un elemento de la lista");
item.appendChild(textItem);
fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);

// Como llamar a los hijos de un elemento
// Primer Hijo
const primerHijo = contenedor.firstChild;
console.log(primerHijo);

// Ultimo Hijo
const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo);

// Primer elemnto hijo
const primerElemntChild = contenedor.firstElementChild;
console.log(primerElemntChild);

// Ultimo elemento hijo
const ultimoElemntChild = contenedor.lastElementChild;
console.log(ultimoElemntChild);

// Tdoos los hijos
const hijos = contenedor.childNodes;
console.log(hijos);

// Recorrer un Node List
hijos.forEach(hijo => console.log(hijo));

// Todos los elemntos hijos
const hijosElemnts = contenedor.children;
console.log(hijosElemnts);

// Recorrer una coleccion HTML
for (hijo of hijos){
	console.log(hijo);
}

// Crear elemntos y colocarles un texto dentro
const parrafo_nuevo = document.createElement("P");
parrafo_nuevo.innerHTML = "Texto de ejemplo de sustituir hijos";

// Reemplazar un elemento por otro
parrafo_viejo = document.querySelector(".parrafo_viejo");
contenedor.replaceChild(parrafo_nuevo, parrafo_viejo);

// eliminar un elemnto hijo
const parrafo_eliminar = document.querySelector(".parrafo_eliminar");
contenedor.removeChild(parrafo_eliminar);

// Validar si un elemento tiene hijos o no
let tieneHijos = contenedor.hasChildNodes();
if (tieneHijos) {
	document.write("El elemnto tiene hijos" + "<br>");
} else {
	document.write("El elemnto no tiene hijos" + "<br>");
}

// Saber el padre de un elemento
console.log(parrafo_nuevo.parentElement);

// Hermanos
const hermanos = document.querySelector(".hermanos");

// Saber que hermano le sigue
console.log(hermanos.nextSibling);

// Saber que hermano viene antes
console.log(hermanos.previousSibling);

// Saber que elemento hermano le sigue
console.log(hermanos.nextElementSibling);

// Saber que elemento hermano viene antes
console.log(hermanos.previousElementSibling);

// Retorna el elemento mas cercano
const div = document.querySelector(".div-3");
console.log(div.closest(".div"));