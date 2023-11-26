import React, {useState} from "react";
import "../estilos/NuevaTarea.css";
import {v4 as uuidv4} from "uuid"

function NuevaTarea(props) {

  const [entrada, setInput] = useState("");

  const manejarCambio = e=>{
    setInput(e.target.value);
  }
  
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto:entrada,
      completada: false
    }
    props.onSubmit(tareaNueva)
    setInput("");
  }
  return (
    <form className="nueva-tarea-container" onSubmit={manejarEnvio}>
      <input
        className="nueva-tarea"
        placeholder="Nueva tarea"
        type="text"
        onChange={manejarCambio}
        value={entrada}
      ></input>
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}

export default NuevaTarea;
