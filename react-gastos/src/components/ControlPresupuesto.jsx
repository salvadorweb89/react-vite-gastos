import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto}) => {

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
          <span>Disponible: </span> {formatPresupuesto(0)}
        </p>
        <p>
          <span>Gastado: </span> {formatPresupuesto(0)}
        </p>
      </div>
    </div>
  );
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired
}

export default ControlPresupuesto;
