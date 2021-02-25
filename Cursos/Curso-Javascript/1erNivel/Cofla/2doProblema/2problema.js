//Problema 1
let free = false;

const ValidarCliente = ()=>{
	let name = prompt("What is your name?")
	let years = prompt(name + " How mane years old?");
	if (years >=18) {
		let time = prompt("What time is it? (format HH)")
		if (time >=2 && time < 7 && free == false) {
			alert("Ganaste una entrada gratis");
			free = true;
		} else {
			alert("La entrada son 5$")
		}
	} else {
		alert("Eres menor de edad, no puedes pasar a la fiesta");
	}
}
// ValidarCliente();
// ValidarCliente();
// ValidarCliente();

// Problema 2
// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];
// for (i = 0; i < cantidad; i++) {
// 	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
// }
// const tomarAsistencia = (nombre, p)=> {
// 	// let presencia = prompt(nombre);
// 	if (presencia == "P") {
// 		alumnosTotales[p][1]++;
// 	}
// }
// for (i=0; i < 30; i ++){
// 	for (alumno in alumnosTotales) {
// 		tomarAsistencia(alumnosTotales[alumno][0], alumno)
// 	}
// }
// for (alumno in alumnosTotales) {
// 	let resultado = `${alumnosTotales[alumno][0]} <br>
// 	--------------Presente: ${alumnosTotales[alumno][1]} <br>
// 	-------------Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;

// 	if (30 - alumnosTotales[alumno][1] > 18) {
// 	resultado+="Reprobado";
// 	} else{
// 		resultado+= "<br><br>"
// 	}
// 	document.write(resultado);
// }

// Problema 3
const sumar = (num1, num2)=> {
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2)=> {
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2)=> {
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2)=> {
	return parseInt(num1) * parseInt(num2);
}
alert ("Que operacion deseas realizar");
let operacion = prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividr");

if (operacion == 1) {
	let numero1= prompt ("Primer numero de la suma");
	let numero2= prompt ("Segundo numero de la suma");
	resultado = sumar(numero1, numero2);
	alert(`El resultado de tu suma es ${resultado}`);
}
else if (operacion==2) {
	let numero1= prompt ("Primer numero de la resta");
	let numero2= prompt ("Segundo numero de la resta");
	resultado = restar(numero1, numero2);
	alert(`El resultado de tu resta es ${resultado}`);
}
else if (operacion==3) {
	let numero1= prompt ("Primer numero de la multiplicacion");
	let numero2= prompt ("Segundo numero de la multiplicacion");
	resultado = multiplicar(numero1, numero2);
	alert(`El resultado de tu multiplicacion es ${resultado}`);
}
else if (operacion==4) {
	let numero1= prompt ("Primer numero de la division");
	let numero2= prompt ("Segundo numero de la division");
	resultado = dividir(numero1, numero2);
	alert(`El resultado de tu division es ${resultado}`);
}
else {
	alert("Operacion matematica no encontrada")
}