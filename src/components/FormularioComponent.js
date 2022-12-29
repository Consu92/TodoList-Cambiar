import React, {useState, useEffect} from "react";

const initialValues =[
  {
    key:'',
    nombre:''
  }
]

const autoValues =[
  {
    id:'',
    marca:'',
    modelo:'',
    velocidad:'', 
    color:'', 
    valor : 0
  }
]

const FormularioComponent = ({usuarioAdd, usuarioEditado, usuarioEdit, setUsuarioEditado}) => {
  const [values, setValues] = useState(initialValues);
  const {key, nombre}= values;

  useEffect( 
    ()=>{
      if(usuarioEditado !== null){
        setValues(usuarioEditado)
      }else{
        setValues({
          key:'',
          nombre:'',
          apellido:'',
          edad:'', 
          password:''
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
      <h1>{usuarioEditado ? 'Editar Usuario':'Crear Usuario'}</h1>
      {/*usuarioEditado es nulo? si no muestra 'Editar usuario', si es nulo muestra 'Ingresar Usuario' */}
        <div className="form-group">
        <label>ID</label> {/**en este input se agrega la tarea, tiene el valor de key */ }
          <input
          type="text"
          className="form-control"
          id="key"
          placeholder="Key"
          value={key}
          name='key'
          onChange={handleInputChange}
          />
          <br/>
          <label></label> {/**en este input se agrega la tarea, tiene el valor de nombre */ }
          <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Escribir tarea"
          value={nombre}
          name='nombre'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary me-2">{usuarioEditado ? 'Editar':'Agregar'}</button> {/*el boton cambia de crear a editar*/}
          {usuarioEditado ? 
          (<button type="button" className="btn btn-outline-warning" onClick={()=>{setUsuarioEditado(null)}}>Cancelar</button>):''}
          
        </div>
        
      </form>
      );
}

const FormularioAuto = ({autoAdd, autoEditado, autoEdit, setAutoEditado}) => {// no agregar este formulario, porque es el de auto
  const [values, setValues] = useState(autoValues);
  const {marca, modelo, velocidad, color, valor}= values;

  useEffect( 
    ()=>{
      if(autoEditado !== null){
        setValues(autoEditado)
      }else{
        setValues({
          id:'',
          marca:'',
          modelo:'',
          velocidad:'', 
          color:'', 
          valor : 0
        })
      }
    }
    ,[autoEditado]);

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
      autoAdd(values);
      
    }

    return(
    <form onSubmit={handleSubmit}>
      <h1>Auto</h1>
        <div className="form-group">
          <label>Marca</label>
          <input
          type="text"
          className="form-control"
          id="marca"
          placeholder="Marca"
          value={marca}
          name='marca'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Modelo</label>
          <input
          type="text"
          className="form-control"
          id="modelo"
          placeholder="Modelo"
          value={modelo}
          name='modelo'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Velocidad</label>
          <input
          type="numeric"
          className="form-control"
          id="velocidad"
          placeholder="Velocidad"
          value={velocidad}
          name='velocidad'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
          type="text"
          className="form-control"
          id="color"
          placeholder="Color"
          value={color}
          name='color'
          onChange={handleInputChange}
          ></input>
          <br/>
        </div>
        <div className="form-group">
          <label>Valor</label>
          <input
          type="numeric"
          className="form-control"
          id="valor"
          placeholder="Valor"
          value={valor}
          name='valor'
          onChange={handleInputChange}
          ></input>
          <br/>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary me-2">{autoEditado ? 'Editar':'Crear'}</button>
          {autoEditado ? 
          (<button type="button" className="btn btn-outline-warning" onClick={()=>{setAutoEditado(null)}}>Cancelar</button>):''}
          
        </div>
        
      </form>
      );
}




export {FormularioComponent, FormularioAuto};