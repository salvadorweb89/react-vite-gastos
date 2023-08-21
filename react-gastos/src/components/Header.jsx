import PropTypes from 'prop-types';
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
    </header>
  );
}

Header.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
}

export default Header;
