import { useState, useEffect } from 'react'
import Header from './components/Header';
import Filtros from './components/Filtros';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generateId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  // useEffect para mostrar el modal.
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);


  //useEffect para inicializar la interfaz si tenemos presupuesto válido en localStorage
  useEffect(() => {
    const presupuestoLocalStorage = Number(localStorage.getItem('presupuesto'));
    if(presupuestoLocalStorage > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  // useEffect para almacenar el presupuesto en localStorage
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);


  // useEffect para almacenar los gastos en el locaStorage
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);


  // useEffect para controlar el efecto de los filtros
  useEffect(() => {
    if(filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro]);

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
      setGastoEditar({});
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

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id );
    setGastos(gastosActualizados);
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
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            
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
          setGastoEditar={setGastoEditar}

        />
      )}
    </div>
  )
}

export default App
