import React, { useState } from "react";
import NuevaTarea from "./NuevaTarea";
import Tarea from "./Tarea";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const actualizarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea =>{
        if(tarea.id===id){
            tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <NuevaTarea onSubmit={agregarTarea}></NuevaTarea>
      <div className="contenedor-lista-tareas">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={actualizarTarea}
            eliminarTarea={eliminarTarea}
          ></Tarea>
        ))}
      </div>
    </>
  );
}

export default ListaTareas;
