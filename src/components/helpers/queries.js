// llamar a una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;
/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATCH  me permiten editar un elemento
DELETE me permiten eliminar un elemento
*/ 
export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listausuarios = await respuesta.json();
        const usuarioBuscado = listausuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            // el mail era correcto
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null
            }
        }else{
            console.log('el mail no existe');
            //el mail no existe
            return null
        }
    }catch(error){
       console.log(error); 
    }
} 

export const obtenerListaProductos = async()=>{
    try{
        const respuesta = await fetch(URL_producto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
}
export const crearProducto = async(producto)=>{
    try{
        const respuesta = await fetch(URL_producto,{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify(producto)
        });
        return respuesta; //El status de la respuesta 200
    }catch(error){
        console.log(error)
    }
}
export const editarProducto = async(producto,id)=>{
    try{
        const respuesta = await fetch(URL_producto+"/"+id,{
          method:"PUT",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify(producto)
        });
        return respuesta; //El status de la respuesta 200
    }catch(error){
        console.log(error)
    }
}
export const borrarProducto = async(id)=>{
    try{
        const respuesta = await fetch(URL_producto+"/"+id,{
          method:"DELETE"
        });
        return respuesta; //El status de la respuesta 201
    }catch(error){
        console.log(error)
    }
}
export const obtenerProducto = async(id)=>{
    try{
        const respuesta = await fetch(URL_producto+"/"+id,{
          method:"GET"
        });
        const producto = await respuesta.json();
        return producto;
    }catch(error){
        console.log(error)
    }
}