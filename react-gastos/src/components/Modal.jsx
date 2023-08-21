import PropTypes from 'prop-types';
import IconoCerrarModal from '../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

const cerrarModal = () => {
  setAnimarModal(false);

  setTimeout(() => {
    setModal(false);
  }, 500);
}

  return (
    <div className="modal">
      <div className="cerrar-modal">
      <img src={IconoCerrarModal} alt="Botón Cerrar Modal de Nuevo Gasto" 
      title="Pulsa para cerrar el modal de nuevo gasto" onClick={cerrarModal} />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombreGasto">Nombre</label>
          <input id="nombreGasto"type="text" placeholder="Indica un nombre para el gasto" />
        </div>
        <div className="campo">
          <label htmlFor="importeGasto">Importe</label>
          <input id="importeGasto"type="number" placeholder="Indica un importe para el gasto. Ej: 300" />
        </div>
        <div className="campo">
          <label htmlFor="categoriaGasto">Categoría</label>
          <select id="categoriaGasto">
            <option value="">-- Selecciona</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">suscripciones</option>
          </select>
          
          <input type="submit" value="Añadir gasto" />
        </div>
      </form>
    </div>
  );
}

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animarModal: PropTypes.bool.isRequired,
  setAnimarModal: PropTypes.func.isRequired,

}

export default Modal;
