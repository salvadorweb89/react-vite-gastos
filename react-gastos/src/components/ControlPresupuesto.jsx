import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.importe, 0)
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    
  }, [gastos]);


  const formatPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })
  }

  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span> {formatPresupuesto(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  gastos: PropTypes.array.isRequired
}

export default ControlPresupuesto;
