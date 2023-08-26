import PropTypes from 'prop-types';

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select value={filtro} onChange={e => setFiltro(e.target.value)}>
            <option value="">Todos</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
}

Filtros.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired
}

export default Filtros;
