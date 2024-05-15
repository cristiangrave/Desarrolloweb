import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./menu.css";
/* import {changeOption} from '../../reducers/optionSlice' */

function Menu() {
  const changeOptionFunc = (e) => {};
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">Lista de Tareas por Cumplir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">task</Nav.Link>
            <Nav.Link href="#link" onClick={changeOptionFunc}>
              goals
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
