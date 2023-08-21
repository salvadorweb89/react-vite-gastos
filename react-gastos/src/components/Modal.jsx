import PropTypes from 'prop-types';
import IconoCerrarModal from '../img/cerrar.svg';

const Modal = ({setModal}) => {

const cerrarModal = () => {
  setModal(false);
}

  return (
    <div className="modal">
      <div className="cerrar-modal">
      <img src={IconoCerrarModal} alt="Botón Cerrar Modal de Nuevo Gasto" 
      title="Pulsa para cerrar el modal de nuevo gasto" onClick={cerrarModal} />
      </div>
      <p>Mostrando modal</p>
    </div>
  );
}

Modal.propTypes = {
  setModal: PropTypes.func.isRequired
}

export default Modal;
