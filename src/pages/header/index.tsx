import {
  Col, Container, Nav, Navbar, Row,
} from 'react-bootstrap';

function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <Navbar.Brand href="#home">Myau</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="galery">Galeria</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Header;
