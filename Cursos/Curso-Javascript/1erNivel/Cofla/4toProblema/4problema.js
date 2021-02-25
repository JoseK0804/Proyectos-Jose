class calculadora {
	constructor(){
	}
 sumar(num1, num2){
	return parseInt(num1) + parseInt(num2);
}
 restar(num1, num2){
	return parseInt(num1) - parseInt(num2);
}
 dividir(num1, num2){
	return parseInt(num1) / parseInt(num2);
}
 multiplicar(num1, num2){
	return parseInt(num1) * parseInt(num2);
}
 potencia(num1, num2){
	return parseInt(num1)**parseInt(num2);
}
 raizCuadrada(num1){
	return Math.sqrt(num1);
}
 raizaCubica(num1){
	return Math.cbrt(num1);
}
}
const pro = new calculadora();
alert ("Que operacion deseas realizar");
let operacion = prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividr, 5. potencia, 6. Raiz cuadrada, 7.Raiz Cubica");

if (operacion == 1) {
	let numero1= prompt ("Primer numero de la suma");
	let numero2= prompt ("Segundo numero de la suma");
	resultado = pro.sumar(numero1, numero2);
	alert(`El resultado de tu suma es ${resultado}`);
}
else if (operacion==2) {
	let numero1= prompt ("Primer numero de la resta");
	let numero2= prompt ("Segundo numero de la resta");
	resultado = pro.restar(numero1, numero2);
	alert(`El resultado de tu resta es ${resultado}`);
}
else if (operacion==3) {
	let numero1= prompt ("Primer numero de la multiplicacion");
	let numero2= prompt ("Segundo numero de la multiplicacion");
	resultado = pro.multiplicar(numero1, numero2);
	alert(`El resultado de tu multiplicacion es ${resultado}`);
}
else if (operacion==5) {
	let numero1= prompt ("Numero a potenciar");
	let numero2= prompt ("Exponente");
	resultado = pro.potencia(numero1, numero2);
	alert(`El resultado de tu potencia es ${resultado}`);
}
else if (operacion==6) {
	let numero1= prompt ("Raiz cuadrada de ");
	resultado = pro.raizCuadrada(numero1);
	alert(`El resultado de tu raiz cuadrada es ${resultado}`);
}
else if (operacion==7) {
	let numero1= prompt ("Raiz cubica de ");
	resultado = pro.raizaCubica(numero1);
	alert(`El resultado de tu raiz cubica es ${resultado}`);
}
else if (operacion==4) {
	let numero1= prompt ("Primer numero de la division");
	let numero2= prompt ("Segundo numero de la division");
	resultado = pro.dividir(numero1, numero2);
	alert(`El resultado de tu division es ${resultado}`);
}
else {
	alert("Operacion matematica no encontrada")
}

// Lo intente hacer a mi manera y lo pude hacer todo, menos la parte de hacer que se muestre la informacion de a cuantas matetrias estas inscripto y cuales
// class materia {
// 	constructor(asignatura, profesor, estudiantes){
// 		this.asignatura = asignatura;
// 		this.profesor = profesor;
// 		this.estudiantes = estudiantes;
// 		this.info = `
// 		La materia ${asignatura} <br>
// 		Tiene como profesor a ${profesor} <br>
// 		y estan inscriptos estos estudaintes ${estudiantes} <br>`
// 	}
// 	verInfo(){
// 		document.write(this.info + "<br>")
// 	}
// }
// 	const Fisica = new materia(
// 	asignatura = "Fisica",
// 	profesor = "Cesar",
// 	estudiantes = ["Jose", "Juan", "Pedro", "Cofla"])

// 	const Quimica = new materia(
// 	asignatura = "Quimica",
// 	profesor = "Pabloski",
// 	estudiantes = ["Jose", "Juan", "Pedro", "Horacio"])

// 	const Lengua = new materia(
// 	asignatura = "Lengua",
// 	profesor = "Hernandez",
// 	estudiantes = ["Jose", "Juan", "Pedro", "Ignacio"])

// 	const Matematica = new materia(
// 	asignatura = "Matematica",
// 	profesor = "Federico",
// 	estudiantes = ["Jose", "Juan", "Pedro", "Cofla"])

// let eleccion = prompt("De que materia quieres obtener informacion?")
// if (eleccion == "Fisica") {
// 	Fisica.verInfo();
// } if (eleccion == "Quimica") {
// 	Quimica.verInfo();
// }
//  if (eleccion == "Lengua") {
// 	Lengua.verInfo();
// }
//  if (eleccion == "Matematica") {
// 	Matematica.verInfo();
// } else{
// 	alert("Materia no encontrada")
// }


// No pude saber cuantos alumnos hay por clase, ni a cuantas, ni cuales clases va Cofla
// Asi es como lo hizp dalto, me copie de su codigo, para seguir con el problema

let materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}

const obtenerInformacion = (materia)=>{
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);
if (informacion !== false) {
	let profesor = informacion[0][0];
	alumnos = informacion[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"));	
document.write(cantidadDeClases("cofla"));	

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	if ((personas.length >= 20)) {
		document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`)
	} else {
		personas.push(alumno);
		if (materia=="fisica") {
			materias = {
				fisica:personas,
				programacion: materias["programacion"],
				logica: materias["logica"],
				quimica: materias["quimica"]
	}
		}
		else if (materia=="programacion") {
			materias = {
				programacion: personas,
				fisica: materias["fisica"],
				logica: materias["logica"],
				quimica: materias["quimica"]
	}
		}
				else if (materia=="quimica") {
			materias = {
				quimica:personas,
				fisica: materias["fisica"],
				logica: materias["logica"],
				programacion: materias["programacion"]
	}
		}
				else if (materia=="logica") {
			materias = {
				logica:personas,
				fisica: materias["fisica"],
				programacion: materias["programacion"],
				quimica: materias["quimica"]
	}
		}
		document.write(`Felicidades ${alumno} te has inscrito a la materia ${materia} <br>`)
	}
}
document.write(materias[`fisica`] + `<br>`)
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
inscribir("Pabloski", "fisica");
document.write(materias[`fisica`] + `<br>`)