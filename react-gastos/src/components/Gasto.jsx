import PropTypes from 'prop-types';
import { formatDate } from '../helpers';

import IconoComida from '../img/icono_comida.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos = {
  comida: IconoComida,
  casa: IconoCasa,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
}

const Gasto = ({ gasto }) => {

  const {nombre, importe, categoria, fecha, id} = gasto;

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={diccionarioIconos[categoria]} />
        <div className='descripcion-gasto'>
          <p className='categoria'>{categoria}</p>
          <p className='nombre-gasto'>{nombre}</p>
          <p className='fecha-gasto'>Agregado el: <span>{formatDate(fecha)}</span></p>
        </div>
      </div>
      <div className='cantidad-gasto'>{importe}€</div>
    </div>
  );
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired
}

export default Gasto;
