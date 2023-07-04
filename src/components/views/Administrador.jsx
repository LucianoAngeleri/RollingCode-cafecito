import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerListaProductos,borrarProducto } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [productos, SetProductos] = useState([]);
  useEffect(()=>{
    //consultar a la api y guardar la respuesta en el state
    obtenerListaProductos().then((respuesta)=>{
      //todo: preguntar si la respuesta tiene
      if(respuesta){
        SetProductos(respuesta);
      }else{
        Swal.fire('Error', 'Intente realizar esta operación en unos minutos', 'error');
      }
    })
  },[])

  const eliminarProducto = (id,nombreProducto) => {
    Swal.fire({
      title: `¿Estás seguro de eliminar el producto ${nombreProducto}?`,
      text: "El producto será eliminado permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProducto(id)
          .then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire(
                "Eliminado",
                `El producto ${nombreProducto} ha sido eliminado correctamente`,
                "success"
              );
              // Actualizar la lista de productos eliminando el producto correspondiente
              SetProductos((productos) =>
                productos.filter((producto) => producto.id !== id)
              );
            } else {
              Swal.fire(
                "Error",
                `Hubo un problema al eliminar el producto ${nombreProducto}`,
                "error"
              );
            }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    });
  };

   return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Link className="btn btn-primary" to='/administrador/crear-producto'>
            Agregar
          </Link>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} eliminarProducto={eliminarProducto}></ItemProducto>)
            }
         
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;