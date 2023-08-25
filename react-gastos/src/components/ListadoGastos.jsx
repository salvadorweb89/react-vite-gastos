import PropTypes from 'prop-types';

import 'react-swipeable-list/dist/styles.css';

import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className='contenedor listado-gastos'>
      <h2>{gastos.length ? 'Listado de gastos' : 'Aún no hay gastos registrados'}</h2>
        {gastos.map(gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
    </div>
  );
}

ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired

}

export default ListadoGastos;
