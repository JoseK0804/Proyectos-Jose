helado1 = "palito de helado de agua";
helado2	="palito de helado de crema";
helado3	="Bombon de helado marca Griddo";
helado4	="Bombon de helado marca Nicollo";
helado5	="Bombon de helado marca anticce";
helado6	="Potecito de helado";
helado7	="Potecito de helado con cereal";
helado8	="Pote de helado pequeño";
helado9	="Pote de helado marca Griddo";
helado10 ="Pote de helado marca Freddo";

nombre = prompt("¿Cual es tu nombre?")
dinero = prompt(nombre + " ¿Cuanto dinero tienes?");

dinero= parseInt(dinero);

if (dinero < 2 && dinero > 1) {
	alert(nombre + " puedes comprarte el " + helado1);
	alert(nombre + " su vuelto es " + (dinero - 1));
}
else if (dinero < 3 && dinero > 2) {
	alert(nombre + " puedes comprarte el " + helado2);
	alert(nombre + " su vuelto es " + (dinero - 2));
}
else if (dinero < 4 && dinero > 3) {
	alert(nombre + " puedes comprarte el " + helado3);
	alert(nombre + " su vuelto es " + (dinero - 3));
}
else if (dinero < 5 && dinero > 4) {
	alert(nombre + " puedes comprarte el " + helado4);
	alert(nombre + " su vuelto es " + (dinero - 4));
}
else if (dinero < 6 && dinero > 5) {
	alert(nombre + " puedes comprarte el " + helado5);
	alert(nombre + " su vuelto es " + (dinero - 5));
}
else if (dinero < 7 && dinero > 6) {
	alert(nombre + " puedes comprarte el " + helado6);
	alert(nombre + " su vuelto es " + (dinero - 6));
}
else if (dinero < 8 && dinero > 7) {
	alert(nombre + " puedes comprarte el " + helado7);
	alert(nombre + " su vuelto es " + (dinero - 7));
}
else if (dinero < 9 && dinero > 8) {
	alert(nombre + " puedes comprarte el " + helado8);
	alert(nombre + " su vuelto es " + (dinero - 8));
}
else if (dinero >= 10 ) {
	alert(nombre + " puedes comprarte el " + helado9 + " o el " + helado10);
	alert(nombre + " su vuelto es " + (dinero - 9));
}
else {
	alert(nombre + " no te alcanza para ningun helado")
}