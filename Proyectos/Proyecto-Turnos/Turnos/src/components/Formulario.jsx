import React, { Fragment, useState } from 'react';
import uuid from 'react-uuid'

const Formulario = ({crearTurno}) => {

    // Crear State de citas
    const [turno, updateTurno] = useState({
        nombre: "",
        actividad: "",
        fecha: "",
        hora: "",
        ejercicio: ""
    })

    const [error, updateError] = useState (false);

    // Funcion que se ejectuta cada vez que el usuario escribe en un input
    //Guarda el valor que escribas en estos inputs
    const updateState = e => {
        console.log((e.target.value));
        updateTurno ({
            ...turno,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    // Guardar los elementos en una variable para que sean mas facil de usar
    const { nombre, actividad,fecha, hora, ejercicio} = turno;

    // Cuando el usuario pulsa el boton
    const submitTurno = e => {
        e.preventDefault();
        console.log("Enviando formulario");

        // Validar el formulario (Que ningun campo este vacio)
        if(nombre.trim() === "" || actividad.trim() === "" || fecha.trim() === "" || hora.trim() === "" || ejercicio.trim() === "" ){
            console.log("Hay un error");
            updateError (true);
            return;
        }
        console.log("Agregando...");

        // Eliminar el mensjae de error, en el caso de que aparezca y se envie el menjsae bien
        updateError (false);
        
        // Asignar un ID
        // Se usa la libreria uuid para crear un id nuevo por cada turno creado
        turno.id = uuid();

        // Crear el turno
        crearTurno(turno);

        // Reiniciar el formulario

    }

    return ( 
        <Fragment>
            <h2>Crear Turno</h2>
            {error 
            ?
            <p className="alerta-error">Todos los campos del formulario son obligatorios</p>
            :
            null
            }
            <form
                onSubmit={submitTurno}
            >
                <label>Nombre y apellido</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Juan Hernandez"
                    onChange={updateState}
                    value={nombre}
                ></input>
                <label>Actividad que deseas realizar</label>
                <input
                    type="text"
                    name="actividad"
                    className="u-full-width"
                    placeholder="Musculacion"
                    onChange={updateState}
                    value={actividad}
                ></input>
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={updateState}
                    value={fecha}
                ></input>
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={updateState}
                    value={hora}
                ></input>
                <label>Ejercicio o musculos a hacer</label>
                <textarea
                   className="u-full-width"
                   name="ejercicio"
                   placeholder="Pecho. Implmentando mancuernas y barras, Piernas. Haciendo sentadillas, y slon"
                   onChange={updateState}
                   value={ejercicio}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={updateState}
                >Agregar Turno</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;