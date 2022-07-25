import React , {useState} from 'react';
import './App.css';
import AgregarTarea from './componentes/tareaForm/tarea';
import ListaTarea from './componentes/listaTarea/listaTarea';

function App() {

  const [lista, setLista] = useState([]);

  const nuevaTarea = (tarea) => {
    setLista([tarea, ...lista])
  }

  const borrarTarea = (id) => {
    const listaFiltrada = lista.filter((e, index) => index !== id);
    setLista(listaFiltrada);
  }

  const actualizarTarea = (id , tarea) => {
    const listaActualizada = lista.map((e, index) => {
      if(index === id){
        e = tarea;
      }
      return e;
    })

    setLista(listaActualizada);
  }

  return (
    <div className="App">
      <div className='app__container'>
      <AgregarTarea
        nuevaTarea={nuevaTarea}
      />

     <div className='app__lista'>
          {
           lista.map((e,index)=> <ListaTarea 
                                      lista={e} 
                                      borrarTarea={borrarTarea}
                                      id={index}
                                      editar={actualizarTarea}
                                  />
                      )
          }
      </div> 

      </div>
      
    </div>
  );
}

export default App;
