import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"


const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Cafecito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link end as={Link} className="nav-item nav-link" to="/">Inicio</Nav.Link>
            <Nav.Link end as={Link} className="nav-item nav-link" to="/registro">Registro</Nav.Link>
            <Nav.Link end as={Link} className="nav-item nav-link" to="/administrador">Administrador</Nav.Link>
            <Nav.Link end as={Link} className="nav-item nav-link" to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
