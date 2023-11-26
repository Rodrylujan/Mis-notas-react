import React from "react";
import "../estilos/Tarea.css";
import { IoMdCloseCircleOutline } from "react-icons/io";


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div onClick={() => eliminarTarea(id)}>
      <IoMdCloseCircleOutline className="tarea-icono"/>
      </div>
    </div>
  );
}

export default Tarea;
