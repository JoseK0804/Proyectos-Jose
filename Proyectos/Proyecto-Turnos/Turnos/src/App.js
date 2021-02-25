import React, { Fragment, useState} from 'react';
import Formulario from './components/Formulario';
function App() {
 
  // Arreglo de citas
  const [turnos, guardarTurnos] = useState([]);

  // FUncion que tome las citas actuales y agregue las nuevas
  const crearTurno = turno => {
    console.log(turno);
  }

  return (
    <Fragment>
    <h1>Administrador de Turnos</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearTurno={crearTurno}
          />
        </div>
        <div className="one-half column">
          
        </div>
      </div>
    
    </div>
    </Fragment>
  );
}

export default App;
