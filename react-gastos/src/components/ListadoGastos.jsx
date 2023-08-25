import PropTypes from 'prop-types';
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => {
  return (
    <div className='contenedor listado-gastos'>
      <h2>{gastos.length ? 'Listado de gastos' : 'Aún no hay gastos registrados'}</h2>
      {gastos.map(gasto => (
        <Gasto 
          gasto={gasto}
          key={gasto.id}
        />
      ))}
    </div>
  );
}

ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired
}

export default ListadoGastos;
