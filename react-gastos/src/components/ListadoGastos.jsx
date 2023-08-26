import PropTypes from 'prop-types';

import 'react-swipeable-list/dist/styles.css';

import Gasto from './Gasto';

const ListadoGastos = ({ 
  gastos, 
  setGastoEditar, 
  eliminarGasto, 
  filtro, 
  gastosFiltrados 
}) => {
  return (
    <div className='contenedor listado-gastos'>
        {
          filtro ? (
            <>
              <h2>{gastosFiltrados.length ? 'Listado de gastos' : 'Aún no hay gastos registrados'}</h2>
              {
                gastosFiltrados.map(gasto => (
                  <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                  />
                ))
              }
            </>
          ) :
          (
            <>
              <h2>{gastos.length ? 'Listado de gastos' : 'Aún no hay gastos registrados'}</h2>
              {
                gastos.map(gasto => (
                  <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                  />
                ))
              }
            </>
          )
        }  
    </div>
  );
}

ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
  filtro: PropTypes.string.isRequired,
  gastosFiltrados: PropTypes.array.isRequired

}

export default ListadoGastos;
