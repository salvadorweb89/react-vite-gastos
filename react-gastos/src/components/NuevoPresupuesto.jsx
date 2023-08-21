import PropTypes from 'prop-types';
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!presupuesto || presupuesto < 0) {
      setMensaje('El presupuesto indicado no es válido (debe ser número y mayor a cero).')

      // Detenemos la ejecución en caso de que no sea un presupuesto válido.
      return;
    }
    
    // Inicializamos el mensaje de nuevo para que desaparezca la alerta en caso de haberla.
    setMensaje('');
    setIsValidPresupuesto(true);
    
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input 
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={ (e) => setPresupuesto(Number(e.target.value)) }
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

NuevoPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired
}

export default NuevoPresupuesto;
