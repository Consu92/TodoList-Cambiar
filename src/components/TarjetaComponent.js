import React from "react";
import "./elementos.css";

const TarjetaComponent = ({usuario, tarjetaDelete, setUsuarioEditado}) => { {/** TarjetaTareaCreadaComponent*/}
    return(
    <div className = "card">
    <div className = "card-body">
      <h3 className="card-title">{usuario.nombre}</h3> {/**hay que cambiarla porque es la tarea agregada */}
      <hr/>
      <div className="container-iconos d-flex justify-content-end"> {/**contenedor de los botones editar y eliminar de la tarea */}
        <i className="icono-editar bi bi-pencil" onClick={()=>setUsuarioEditado(usuario)}></i>
        <i className="icono-eliminar bi bi-trash3" onClick={() => tarjetaDelete(usuario.key)}></i>
      </div>
    </div>
  </div>)

}

export {TarjetaComponent};


