import { useState } from 'react'
import PropTypes from 'prop-types';
import Mensaje from './Mensaje';
import IconoCerrarModal from '../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
  const [mensajeForm, setMensajeForm] = useState('');
  const [nombre, setNombre] = useState('');
  const [importe, setImporte] = useState(0);
  const [categoria, setCategoria] = useState('');

  const cerrarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, importe, categoria].includes('')){
      setMensajeForm('Todos los campos son obligatorios');

      setTimeout(() => {
        setMensajeForm('');
      }, 4000);

      return;
    }
    
    guardarGasto({nombre, importe, categoria});
    
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
      <img src={IconoCerrarModal} alt="Botón Cerrar Modal de Nuevo Gasto" 
      title="Pulsa para cerrar el modal de nuevo gasto" onClick={cerrarModal} />
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={ handleSubmit }>
        <legend>Nuevo Gasto</legend>

        {mensajeForm && <Mensaje tipo="error" >{mensajeForm}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombreGasto">Nombre</label>
          <input id="nombreGasto" type="text" placeholder="Indica un nombre para el gasto" 
          value={nombre} onChange={ e => setNombre(e.target.value) } />
        </div>
        <div className="campo">
          <label htmlFor="importeGasto">Importe</label>
          <input id="importeGasto" type="number" placeholder="Indica un importe para el gasto. Ej: 300" 
          value={importe} onChange={ e => setImporte(Number(e.target.value)) }/>
        </div>
        <div className="campo">
          <label htmlFor="categoriaGasto">Categoría</label>
          <select id="categoriaGasto" value={categoria} onChange={ e => setCategoria(e.target.value) } >
            <option value="">-- Selecciona</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
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
  guardarGasto: PropTypes.func.isRequired

}

export default Modal;
