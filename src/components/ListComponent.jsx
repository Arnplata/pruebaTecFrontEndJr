import React, { useState,Fragment} from 'react';
import ListElement from './ListElement';

const ListComponent = (props) => {
    const [newTaskName, setNewTaskName] = useState("");
   
    const updateNewTaskValue = e => setNewTaskName(e.target.value)

    const createNewTask = () => {
      props.callBack(newTaskName)
      setNewTaskName('')
    }

    const cambiarEstado = id => {
     props.changeState(id)
   }

   const limpiarLista = () => {
    props.limpiarLista()
    console.log(props.tareasActuales)
  }


    return (
      <Fragment>
        <div className="contTareas">
          <div className="lista">
            <ul>
              {props.tareasActuales.map((tarea) => (
                <ListElement
                  key={tarea.id}
                  desc={tarea.descripcion}
                  id={tarea.id}
                  tareas={tarea}
                  changeState={cambiarEstado}
                />
              ))}
            </ul>
          </div>
          <div className="controlWrapper">
            <div className="inptWrapper">
              <input
                id="input"
                placeholder="Ingresa una tarea"
                type="text"
                value={newTaskName}
                onChange={updateNewTaskValue}
              />
              <button onClick={createNewTask}>Agregar</button>
            </div>
            <button className="clearBotton" onClick={limpiarLista}>
              Borrar Seleccionados
            </button>
          </div>
        </div>
      </Fragment>
    );
}

export default ListComponent;
