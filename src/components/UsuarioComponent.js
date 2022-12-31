import React,{useState} from "react";
import {TarjetaComponent} from "./TarjetaComponent";
import {FormularioComponent} from "./FormularioComponent";

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

    
    const tarjetaDelete =(usuarioKey)=>{
        const changeUsuarios = usuarios.filter(u => u.key !== usuarioKey)
        setUsuarios(changeUsuarios)
    }
    const usuarioAdd =(usuario)=>{  //agregar tarea {en este caso est{a agregando un usuario}
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
    <div className="">
      
    <div className="col">
        <h1>To do list</h1>  {/*Formulario crear usuario o editar* */}
        <FormularioComponent 
        usuarioAdd={usuarioAdd} 
        usuarioEditado={usuarioEditado}
        usuarioEdit={usuarioEdit}
        setUsuarioEditado={setUsuarioEditado}/>
        
      </div>
      <div className="col-8 ">
        <h1></h1> {/*Salía tareas de titulo y despues las tareas agregadas*/}
        {
            usuarios.map(u =>
                <TarjetaComponent 
                key={u.key} 
                usuario={u} 
                tarjetaDelete={tarjetaDelete}
                setUsuarioEditado={setUsuarioEditado}/>)
        }
        
      </div>
        <br/>
    </div>
  </div>
  );

}

export default UsuarioComponent;