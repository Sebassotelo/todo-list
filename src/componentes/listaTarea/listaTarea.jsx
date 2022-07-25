import React , {useState} from 'react';
import './listaTarea.css';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

function ListaTarea(props) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const [hecho, setHecho] = useState(false);



  const borrarTarea = ()=>{
    props.borrarTarea(props.id);

  }

  const editar = () => {
    setEdit(true);
    
  }
  const manejarEdit = (event) => {
    setEditText(event.target.value);

  }

  const submitEdit = (event) =>{
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText('');
    setEdit(false)
  }

  const completado = () => {
    setHecho(!hecho);
  }

  return (
    <div className='lista__tarea__container'>

      { !edit ?
        <div className={hecho ? 'listaTarea completa' :'listaTarea'}>
        <p className='lista__p' onClick={completado}><span>{props.lista}</span></p>
        
        
        <FiEdit2  className='icon edit' onClick={editar}/>
        <AiOutlineClose className='icon clear' onClick={borrarTarea}/>

      </div>
       :
       <form className='form__edit' onSubmit={submitEdit}>
        <input className='edit__input' type="text" value={editText} onChange={manejarEdit} required/>
        <button className='edit__save' onClick={completado}>Guardar</button>
       </form>

      }

      
    
      
    </div>
  )
}

export default ListaTarea;
