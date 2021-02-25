
// Array
let variable = "Contenido";
Usuario = ["Jose", 19, "Venezuela"];
document.write (Usuario);
document.write("<br>" + "<br>");
document.write (`<br> ${Usuario[2]}`);
document.write("<br>" + "<br>")

// Array Asociativo
let pc= {
	nombre: "JosePC",
	procesador: "Intel core",
	ram: "16gb",
	espacio: "1tb"
};
document.write(`<br>${pc["procesador"]}`);
document.write("<br>" + "<br>");

// Usos
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase= `<br> El nombre  de mi pc es: <b>${nombre}</b> <br>
		El procesador es: <b>${procesador}</b> <br>
		La mermoria Ram es: <b>${ram}</b> <br>
		El espacio es de: <b>${espacio}</b>`;
document.write(frase);
document.write("<br>" + "<br>");

// Blucles
let numero = 0;

while (numero < 5) {
	numero++
	document.write(` ${numero} <br>`);
}

document.write("<br>" + "<br>");

// do while
do {
	document.write(` ${numero} <br>`);
	numero++;
}

while (numero < 10)
document.write("<br>" + "<br>");

let numero2 = 0;
while (numero2 < 1000) {
	numero2++;
	document.write(numero2 + "<br>");
	if (numero2 == 20) {
		break;
	}
}

document.write("<br>" + "<br>");

// for

for (let i = 0; i < 10; i++) {

	if (i==5) {
		continue;
	}
	document.write (i + "<br>")

	if (i==8) {
		break;
	}

}

document.write("<br>" + "<br>");

// For in
let animales = ["Gato", "Perro", "Conejo", "Lobo", "Oso"];

for (animal in animales) {
	// document.write(animales[animal] + "<br>");
	document.write(animal + "<br>");
}

document.write("<br>" + "<br>");

// For of
for (animal of animales) {
	document.write(animal + "<br>");
}

document.write("<br>" + "<br>");

// Label
let nombres = ["Jose", "Juana", "Petra"];
let apellido = ["Perez", "Acosta", nombres];

forterminar:
for (let completo in apellido) {
	if (completo ==2){
		for (let completo of nombres){
			document.write (completo + "<br>");
			break forterminar;
					}
		} else{
			document.write(apellido[completo] + "<br>");
		}
}

//fuciones
function saludar(){
name= prompt("!Hi What is your name?")
respuesta=prompt(name + " How are you?")
if (respuesta == "Fine") {
	alert("That good!")
} else {
	alert("That bad!")
}
}
saludar()

// Return
function edad () {
	namee= prompt("Hello! What is your name?");
	mayor =prompt (namee + " How mane years old?")
	if (mayor >= 18) {
		alert("Muy bien")
		return "Es Mayor de edad"
	} else {
		alert("Que mal")
		return"Es menor de edad"
	}
}
let retorno = edad ();
document.write(retorno);

document.write("<br>" + "<br>");

//Parametros
// function sumar(numero1, numero2){
// 	let resultadoo = numero1 + numero2;
// 	document.write(resultadoo + "<br>")
// }
// // sumar(10,50);
// // sumar(27,58);
 
 // Funciones Flecha
 const sumar = (numero1, numero2)=> {
 	let resultadoo = numero1 + numero2;
	document.write(resultadoo + "<br>")
 }
sumar(10,50);
sumar(27,58);