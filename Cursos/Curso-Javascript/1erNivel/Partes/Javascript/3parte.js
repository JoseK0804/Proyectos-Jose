class animal {
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
	}
	verInfo () {
		//Metodos
		document.write(this.info + "<br>");
	}
}

//Herencia
class perro extends animal {
	constructor(especie,edad,color,dueño,collar){
		super(especie,edad,color);
		this.dueño = dueño;
		//Asi para metodo get
		this.collar = null;
		// Asi para metodo set
		// this.collar = collar;
		this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}, y mi dueño es: ${dueño}, EL collar es de ${this.collar}`;
	}
	// Metodo estatico
	 static ladrar() {
		alert("WAW!");
	}
	ladrar() {
		alert("WAW!");
	}
	// Metodos set
	set modificarCollar (collar){
		this.collar = collar;
	}
	// Metodos get
	get obtenerCollar() {
		return this.collar;
	}
}

const perruno = new perro("Golden", 18, "marron", "Jose");//Colocar aca un tipo de collar, si quieres probar el metodo set
const gato = new animal("de la calle", 3, "negro");
const pajaro = new animal("loro", 1, "verde");
console.log(perro);

// Metodo estaico
perro.ladrar();

//Metodos
perruno.verInfo();
perruno.ladrar();
gato.verInfo();
pajaro.verInfo();

// Metodo set
perruno.modificarCollar = "Oro";
// document.write(`El collar del perro es de ${perruno.collar}`);

//Metodo get
document.write(`El collar del perro es de ${perruno.obtenerCollar}`);
