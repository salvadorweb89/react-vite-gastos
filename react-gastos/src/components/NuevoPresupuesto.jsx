import PropTypes from 'prop-types';
import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('El presupuesto indicado no es válido (debe ser número y mayor a cero).')
    }
    else{
      setMensaje('');
      console.log('El presupuesto indicado es válido.')
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input 
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={ (e) => setPresupuesto(e.target.value) }
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
}

export default NuevoPresupuesto;
