import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  const isLoggedIn = sessionStorage.getItem("usuario");

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Temperatura Brasil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/graficos">Gráficos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            {isLoggedIn && <Nav.Link href="/adicionar-grafico">Adicionar Gráfico</Nav.Link>}
            <NavDropdown title="Usuário" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Entrar</NavDropdown.Item>
              <NavDropdown.Item href="/cadastro">Cadastre-se</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sair">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
