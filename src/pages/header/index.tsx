import {
  Col, Container, Nav, Navbar, Row,
} from 'react-bootstrap';

function Header() {
  return (
    <Container className='sticky-top header-background'>
      <Row>
        <Col>
        </Col>
        <Col>
          <Navbar>
            <Navbar.Brand href="#home">Myau</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="galery">Galeria</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Header;
