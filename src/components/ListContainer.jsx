import React, { useState,Fragment,useEffect } from 'react';
import ListComponent from './ListComponent';
import { v4 as generarID} from "uuid"


export default function ListContainer() {

    

    const [tareasActuales, setTareasActuales] = useState ([{id:1, descripcion: "Tarea 1", completeda: (false)}]) //estado inicial

    const agregarTarea = taskName => {
       setTareasActuales([...tareasActuales, {id:generarID(), descripcion: taskName, completeda:(false)}]) 
    }

    const limpiarLista = () => {
      const newTodos = tareasActuales.filter((t) => !t.completeda);
      setTareasActuales(newTodos);
    }

    const cambiarEstado = id => {
        
        const newTodos = [...tareasActuales]; // ...en el array actual de tareas...
        const todo = newTodos.find(task => task.id === id); // ...encuentra el elemento que coincide con el ID dado...
        todo.completeda = !todo.completeda; //...cambia el estado de "completado" (true-false)
        setTareasActuales(newTodos); //guarda los cambios.
    }

    useEffect(() => { //Persistividad
      const storedTodos = JSON.parse(localStorage.getItem("listaTareas.tareas")); //Consulta local Storage
      
      if (storedTodos){
          const newTodos = storedTodos
          setTareasActuales(newTodos) //imprime lo que esta en el local storage
      }

    }, []); //Solo se ejecuta la primera vez que se renderiza el componente
  
    
      useEffect(()=>{ //Guarda en local Storage
        localStorage.setItem("listaTareas.tareas", JSON.stringify(tareasActuales))
      },[tareasActuales]) //Se ejecuta cada que hay un cambio en el array "tareasActuales"


    return (
      <Fragment>
        <ListComponent
          tareasActuales={tareasActuales}
          callBack={agregarTarea}
          changeState={cambiarEstado}
          limpiarLista={limpiarLista}
        ></ListComponent>
      </Fragment>
    );
}
