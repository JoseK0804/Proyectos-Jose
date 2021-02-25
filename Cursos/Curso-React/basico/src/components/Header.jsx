import React from "react";

function Header({titulo}) {
// En esta seccion del codigo se coloca codigo Js
    const edad = 18;

    let mensaje;
    if(edad > 17) {
        mensaje= "Eres mayor de edad"
    } else {
        mensaje= "Eres menor de edad"
    }
    
    return(
        // Y en esta seccion se coloca el codigo HTML
        <header>
            <h1 className="Encabezado" id="Encabezado"> Desde el header</h1>
            <h2> {edad} </h2>
            <h3> {mensaje} </h3>
            <h3> {titulo} </h3>
        </header>
    )
}
export default Header;