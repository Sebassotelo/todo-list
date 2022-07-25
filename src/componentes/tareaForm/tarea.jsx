import React , {useState} from 'react';
import './tarea.css';

function Tarea(props) {

const [input, setInput] = useState('');

const manejarForm = (event) => {
    setInput(event.target.value)
}

const manejarEnvio = (event) => {
    event.preventDefault();
    props.nuevaTarea(input);
    setInput('');
}

  return (
    <div className='form__container' onSubmit={manejarEnvio}>
      <form className='form'>
        <input className='form__input'value={input} onChange={manejarForm} placeholder='Esbribe tu tarea' required/>
        <button className='form__boton'>Añadir</button>
      </form>
    </div>
  )
}

export default Tarea;
