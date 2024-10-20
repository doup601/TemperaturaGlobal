/*Uso de React Bootstrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Temperatura Brasil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/graficos">Gráficos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <NavDropdown title="Usuário" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Entrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cadastre-se
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;