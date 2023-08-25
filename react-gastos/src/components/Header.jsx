import PropTypes from 'prop-types';
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from './ControlPresupuesto';

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
          presupuesto={presupuesto}
          gastos={gastos}
        />
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
  setIsValidPresupuesto: PropTypes.func.isRequired,
  gastos: PropTypes.array.isRequired
}

export default Header;
