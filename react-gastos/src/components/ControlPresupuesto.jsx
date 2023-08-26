import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  gastos, 
  setGastos, 
  setIsValidPresupuesto
}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentajeGastado, setPorcentajeGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.importe, 0)
    setGastado(totalGastado);

    const totalDisponible = presupuesto - totalGastado;
    setDisponible(totalDisponible);

    // Calculamos porcentaje de presupuesto consumido
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

    // Actualizamos la gráfica tras unos segundos para poder apreciar la animación.
    setTimeout(() => setPorcentajeGastado(nuevoPorcentaje) , 1000);

    
  }, [gastos]);


  const formatPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })
  }


  const handleResetApp = () => {
    const resultado = confirm(`¿Estás seguro/a de que quieres reiniciar la App? 
    \nEsta operación eliminará el presupuesto y todos los gastos`);

    if (resultado) {
      setPresupuesto(0);
      setIsValidPresupuesto(false);
      setGastos([]);
    }
  }

  return (
    <div className="contenedor contenedor-presupuesto sombra dos-columnas">
      <div>
        <CircularProgressbar 
          value={porcentajeGastado}
          text={`${porcentajeGastado}% Gastado`}
          styles={buildStyles({
            pathColor: porcentajeGastado > 100 ? '#FF0000' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className='reset-app' type='button' onClick={handleResetApp}>
          Reiniciar App
        </button>
        <p>
          <span>Presupuesto: </span> {formatPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
  setPresupuesto: PropTypes.func.isRequired,
  gastos: PropTypes.array.isRequired,
  setGastos: PropTypes.func.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired
}

export default ControlPresupuesto;
