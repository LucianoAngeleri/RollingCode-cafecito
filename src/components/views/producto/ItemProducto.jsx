import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = ({producto,eliminarProducto}) => {

   return (
    <tr>
      {/* <td>{props.producto.id}</td> */}
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>${producto.precio}</td>
      <td>{producto.imagen}</td>
      <td>{producto.categoria}</td>
      <td>
        <Link className="btn btn-warning" to={"/administrador/editar-producto/"+producto.id}>Editar</Link>
        <Button variant="danger" onClick={() => eliminarProducto(producto.id,producto.nombreProducto)}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;