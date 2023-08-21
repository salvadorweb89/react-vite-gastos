import PropTypes from 'prop-types';
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <p>Control de Presupuesto</p>
      ) : (
        <NuevoPresupuesto 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
      )}

      
    </header>
  );
}

Header.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  isValidPresupuesto: PropTypes.bool.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired
}

export default Header;
