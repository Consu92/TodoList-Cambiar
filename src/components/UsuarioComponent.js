import React,{useState, useCallback} from "react";
import {TarjetaComponent} from "./TarjetaComponent";
import {FormularioComponent} from "./FormularioComponent";
import {useNavigate} from 'react-router-dom'



const initialUsuarios =[
    {
        key:0,
        nombre: 'Comer manzana'  //
    },
    {
        key:1,
        nombre: 'Leer libro'  //

    },
    {
        key:2,
        nombre: 'Tomar apuntes' //
       
        
    }
]


const UsuarioComponent = () => {

    const [usuarios, setUsuarios] = useState(initialUsuarios);
    {/* const state = useState(initialUsuarios);
    state[0]=initialUsuarios
    state[1]= funcion que nos permite hacer cambios */}
    const [usuarioEditado, setUsuarioEditado]= useState(null);

    const navigate = useNavigate();

    const handleOnClick = useCallback(()=> navigate('/autos', {replace:true}, [navigate]));

    const tarjetaDelete =(usuarioKey)=>{
        const changeUsuarios = usuarios.filter(u => u.key !== usuarioKey)
        setUsuarios(changeUsuarios)
    }
    const usuarioAdd =(usuario)=>{
        const addUsuarios = [
            ...usuarios,
            usuario
        ]
        setUsuarios(addUsuarios)
    }

    const usuarioEdit=(usuarioEditado)=>{
        const changeUsuarios = usuarios.map(usuario => (usuario.key === usuarioEditado.key ? usuarioEditado : usuario))
        setUsuarios(changeUsuarios)
    }

    return(
    <div className="container mt-4">
    <div className="row">
      <div className="col-8 ">
        <h1>Tareas</h1>
        {
            usuarios.map(u =>
                <TarjetaComponent 
                key={u.key} 
                usuario={u} 
                tarjetaDelete={tarjetaDelete}
                setUsuarioEditado={setUsuarioEditado}/>)
        }
        
      </div>
      <div className="col">
        <h1>To do list</h1>  {/*Formulario crear usuario o editar* */}
        <FormularioComponent 
        usuarioAdd={usuarioAdd} 
        usuarioEditado={usuarioEditado}
        usuarioEdit={usuarioEdit}
        setUsuarioEditado={setUsuarioEditado}/>
        
      </div>
        <br/>
        <div>
      <button type="buttom" className="btn btn-outline-primary me-2" onClick={handleOnClick}>No agregar este boton</button>
      </div>
    </div>
  </div>
  );

}

export default UsuarioComponent;