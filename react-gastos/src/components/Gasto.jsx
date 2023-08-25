import PropTypes from 'prop-types';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';

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

const Gasto = ({ gasto, setGastoEditar }) => {

  const {nombre, importe, categoria, fecha, id} = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.log('eliminar')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
        <div className='contenido-gasto'>
          <img src={diccionarioIconos[categoria]} alt={`Ìcono gasto tipo ${categoria}`} />
          <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='fecha-gasto'>Agregado el: <span>{formatDate(fecha)}</span></p>
          </div>
        </div>
        <div className='cantidad-gasto'>{importe}€</div>
      </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
  setGastoEditar: PropTypes.func.isRequired

}

export default Gasto;
