class celular {
	constructor(color,peso,pantalla,camara,ram){
		this.color = color;
		this.peso = peso;
		this.pantalla = pantalla;
		this.camara = camara;
		this.ram = ram;
		this.encendido = false;
	}
	botonEncendido (){
		if (this.encendido == false) {
			alert(`Celular se esta encendiendo`);
			this.encendido = true;
		} else {
			alert(`Celular se esta apagando`)
			this.encendido = false;
		}
	}
	reinicar(){
		if (this.encendido == true) {
			alert("Reiniciando celular");
		} else {
			alert("El celular esta apagado")
		}
	}
	tomarFoto(){
		if (this.encendido == true) {
			alert(`Foto tomada con exito, fue tomada con una resolucion de  ${this.camara}`);
		} else {
			alert(`El celular esta apagado`)
		}
	}
	grabarVideo(){
		if (this.encendido == true) {
			alert(`Video grabado con exito! Su video fue grabado con una resolucion de ${this.camara}`);	
		} else {
			alert(`El celular esta apagado`)
		}
	}
		mostrarInfo(){
			return `
			El color del celular es: <b> ${this.color}</b><br>
			El peso del celular es: <b> ${this.peso}</b><br>
			El tamaño de la pnatalla es: <b> ${this.pantalla}</b><br>
			La resolucion de la camara es: <b> ${this.camara}</b><br>
			La cantidad de memoria RAM es: <b> ${this.ram}</b><br>`
		}
}

class celularPro extends celular {
	constructor(color,peso,pantalla,camara,ram, camaraExtra){
		super(color,peso,pantalla,camara,ram);
		this.camaraExtra = camaraExtra;
	}
	grabarVideoLento(){
		if (this.encendido == true) {
			alert(`Video grabado en camara lenta con exito! Su video fue grabado con una resolucion de ${this.camara}`);	
		} else {
			alert(`El celular esta apagado`)
		}
	}
	reconocimiento(){
		if (this.encendido == true) {
			alert(`Reconocido`);	
		} else {
			alert(`El celular esta apagado`)
		}
	}
			mostrarInfo(){
			return `
			El color del celular es: <b> ${this.color}</b><br>
			El peso del celular es: <b> ${this.peso}</b><br>
			El tamaño de la pnatalla es: <b> ${this.pantalla}</b><br>
			La resolucion de la camara es: <b> ${this.camara}</b><br>
			La cantidad de memoria RAM es: <b> ${this.ram}</b><br>
			La camara extra tiene una resolucion de: <b>${this.camaraExtra}</b><br>`
		}
}
samsung = new celular ("silver","200gm","7 pulgadas","full HD","2GB");
apple = new celular ("Gold", "100gm", "5 pulgadas", "HD", "3GB");
xiaomi = new celular("Rosa", "100gm", "8 pulgadas", "Ultra HD", "9GB");
blackberry = new celularPro("Vinilo" , "200 gm", "9 pulgadas", "4k", "15gb", "8k");
nokia = new celularPro("verde" , "250 gm", "10 pulgadas", "4k", "15gb", "8k");

samsung.botonEncendido();
samsung.tomarFoto();
samsung.grabarVideo();
samsung.reinicar();
samsung.botonEncendido();
document.write(samsung.mostrarInfo() + "<br>");
document.write(apple.mostrarInfo() + "<br>");
document.write(xiaomi.mostrarInfo() + "<br>");
document.write(blackberry.mostrarInfo() + "<br>");
document.write(nokia.mostrarInfo() + "<br>");

class juego {
	constructor(popularidad, puntuacion, peso){
		this.popularidad = popularidad;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abirir(){
		if(this.instalada == true && this.iniciada == false){											
			alert(`Se esta iniciando su juego`);
			this.iniciada = true;
		} else {
			alert(`Verifique si tiene el juego instalado y que ya no este iniciado`);
		}
	} 
	cerrar(){
		if(this.instalada == true && this.iniciada == true){
			alert(`Se esta cerando su juego`);
			this.iniciada = false;
		} else {
			alert(`Verifique si tiene el juego instalado y que este iniciado`);
		}
	}
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert(`Se esta instalando su juego`);
		} else {
			alert(`Ya tiene el juego instalado en su celular`);
		}
	}
	desinstalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert(`Se esta desinstalando su juego`);
		} else {
			alert(`No tiene el juego instalado en su celular`);
		}
	}
	juegoinfo(){
		return `
		Este juego tiene una popularidad de: <b>${this.popularidad}</b><br>
		Este juego tiene una puntuacion de: <b>${this.puntuacion}</b><br>
		Este juego tiene una peso de: <b>${this.peso}</b><br>
		`
	}
}
FreeFire = new juego("4 estrellas", "5 puntos", "5gb");
ClashOfClasns = new juego("5 estrellas", "4 puntos", "4gb");
Fornite = new juego("2 estrellas", "2 puntos", "7gb");
COD = new juego("1 estrellas", "10 puntos", "8gb");
FIFA = new juego("3 estrellas", "3 puntos", "9gb");
ClashRoyale = new juego("5 estrellas", "7 puntos", "11gb");
CandyCrush = new juego("2 estrellas", "8 puntos", "4gb");


FreeFire.abirir();
FreeFire.instalar();
FreeFire.cerrar();
FreeFire.desinstalar();
document.write(FreeFire.juegoinfo() + "<br>");
document.write(ClashOfClasns.juegoinfo() + "<br>");
document.write(Fornite.juegoinfo() + "<br>");
document.write(COD.juegoinfo() + "<br>");
document.write(FIFA.juegoinfo() + "<br>");
document.write(ClashRoyale.juegoinfo() + "<br>");
document.write(CandyCrush.juegoinfo() + "<br>");
