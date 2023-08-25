import { useState, useEffect } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generateId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar])


  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({}); // reiniciamos gastoEditar para que el form aparezca vacío cuando queramos crear un gasto

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }


  const guardarGasto = gasto => {

    if(gasto.idGasto) {
      // Actualizar Gasto

      gasto.id = gasto.idGasto;
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
    }
    else{
      // Nuevo Gasto

      gasto.id = generateId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }



  return (
    <div className={ modal ? 'fijar' : undefined }>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />
      
      {isValidPresupuesto && (

        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            
            />
          </main>  
          <div className="nuevo-gasto">
            <img src={IconoNuevoGasto} alt="Botón Nuevo Gasto" title="Pulsa para crear nuevo gasto" 
            onClick={handleNuevoGasto} />
          </div>

        </>
      )}

      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}

        />
      )}
    </div>
  )
}

export default App
