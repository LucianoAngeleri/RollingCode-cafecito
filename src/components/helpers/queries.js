//llamar a una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;

/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATCH me permiten editar un elemento
DELETE me permiten eliminar un elemento
*/
export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);

    if (usuarioBuscado) {
        // El mail era correcto
        if(usuarioBuscado.password === usuario.password){
            return usuarioBuscado
        }else{
            console.log("Password incorrecto");
            return null
        }
    }else{
        console.log("El mail no existe")
        // El mail no existe
        return null
    }
  } catch (error) {
    console.log(error);
  }
};
