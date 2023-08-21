import PropTypes from 'prop-types';


const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  );
}

Mensaje.propTypes = {
  children: PropTypes.node.isRequired,
  tipo: PropTypes.string.isRequired,
}

export default Mensaje;
