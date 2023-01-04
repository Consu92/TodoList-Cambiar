import React, {useState, useEffect} from "react";

const initialValues =[
  {
    nombre:''
  }
]



const FormularioComponent = ({usuarioAdd, usuarioEditado, usuarioEdit, setUsuarioEditado}) => {
  const [values, setValues] = useState(initialValues);
  const {nombre}= values;

  useEffect( 
    ()=>{
      if(usuarioEditado !== null){
        setValues(usuarioEditado)
      }else{
        setValues({
          nombre:''
        })
      }
    }
    ,[usuarioEditado]);

    {/*useEffect(accion que debe hacer, [estado del cual debe estar pendiente])*/}

  const handleInputChange=(e)=>{
    
    const changedFormValue ={
      ...values, 
      [e.target.name]:e.target.value
      //key:key
    }
    setValues(changedFormValue)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(usuarioEditado !== null){
      usuarioEdit(values)
    }else{
      usuarioAdd(values)
    }
    
  }

    return(
    <form onSubmit={handleSubmit}>
      <h1>{usuarioEditado ? '':''}</h1>
      {/*usuarioEditado es nulo? si no muestra 'Editar usuario', si es nulo muestra 'Ingresar Usuario' */}
        <div className="form-group">
          <label></label> {/**en este input se agrega la tarea, tiene el valor de nombre */ }
          <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Escribir tarea..."
          value={nombre}
          name='nombre'
          onChange={handleInputChange}
          />
          <br/>      
        </div>
        <div>
          <button type="submit" className="boton-editar-agregar  me-2"><span className="span-editar-agregar"></span>{usuarioEditado ? 'Editar':'Agregar'}</button> {/*el boton cambia de crear a editar*/}
          {usuarioEditado ? 
          (<button type="button" className="boton-cancelar " onClick={()=>{setUsuarioEditado(null)}}><span className="span-cancelar"></span>Cancelar</button>):''}
          
        </div>
        
      </form>
      );
}







export {FormularioComponent};