import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
    //Lógica que quiero averiguar
    const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuario")) || null;

    if(!usuarioLogeado){
        return <Navigate to="/login"></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;