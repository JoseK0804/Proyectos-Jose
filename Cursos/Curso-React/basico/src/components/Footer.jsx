// Estos son componentes, pueden ser archivo js o jsx
// El import React from 'react'  se coloca al inicio de todos los componentes
import React from 'react'

// Esto es una funcion flecha
const Footer =({fecha})=> {
    //Antes del retrun se coloca todo el codico js y css
    // Y dentro del return se coloca el codigo HTML
    return(
        <footer>
            <p>Todos los derechos reservados &copy; </p>
            <span>{fecha}</span>
        </footer>
    )
}
// El exporta tambien lo deben contener todos los componentes
export default Footer;