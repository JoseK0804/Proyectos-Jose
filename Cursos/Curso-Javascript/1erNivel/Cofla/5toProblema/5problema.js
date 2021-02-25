const materias ={
	Deporte: [95,9,3,"Deporte"],
	Relogion: [97,8,3,"Relogion"],
	Anatomia: [98,7,1,"Anatomia"],
	Calculo: [99,5,4,"Calculo"],
	militar: [100,4,4,"pre-militar"],
	Quimica: [75,8,3,"Quimica"],
	Matematicas: [35,4,2,"Matematicas"],	
	Logica: [50,2,1,"Logica"],
	Biologia: [33,10,4,"Biologia"],
	Algebra: [100,7,3,"Algebra"],
	Lengua: [20,5,2,"Lengua"],
	Ingles: [92,3,1,"Ingles"]
}

const aprobo =()=>{
	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		console.log(materias[materia][3]);
		console.log(`El estudiante Cofla en la materia ${materias[materia][3]} tiene un porcentaje de asistencias de ${materias[materia][0]}%, tiene un promedio de ${materias[materia][1]}/10 y entrego ${materias[materia][2]} de 4; Asi que esta:`)
		if (asistencias >= 90 & promedio >= 7 & trabajos >=3) {
			console.log(`%cAprobado`, "color: #0f0");
		} else {
			console.log(`%cDesaprobado`, "color: #f00");
		}
	}
}

console.log("Primer Problema");
console.groupCollapsed("Aprobo?");
aprobo();
console.groupEnd();

// Segundo Problema
let casa = "35 minutos de tareas de la casa";
let estudiar = "103 minutos de estudiar";
let tp = "103 minutos de hacer trabajos practicos";
let trabajo = "240 minutos de ir a trabajar";
let descanso = "5 minutos de descanso";


console.log("TAREAS - Segundo Problema");
for (var i = 0; i < 14; i++) {
	if (i==0) {
		console.groupEnd();
		console.groupCollapsed("Semana 1");
	}
console.groupCollapsed("Dia " + (i+1));
console.log(estudiar);
console.log(tp);
console.log(casa);
console.log(descanso);
console.log(trabajo);
console.groupEnd();
	if (i==6) {
		console.groupEnd();
		console.groupCollapsed("Semana 2");
	}
}
console.groupEnd();
console.groupEnd();

