import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (

    
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>

      </div>


      <div className='contenedor-principal'>
        <Contador numClicks = {numClicks} />


        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />

      </div>

    </div>
  );
} 

export default App;
