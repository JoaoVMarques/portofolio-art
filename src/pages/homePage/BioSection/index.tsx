import { Col, Container, Row } from 'react-bootstrap';
import placeholderImage from '../../../imgs/placeholder.jpg';

function BioSection() {
  return (
    <Container className='my-5'>
      <Row>
        <Col>
          <img src={placeholderImage} alt="placeholder imagem" />
        </Col>
        <Col className=''>
          <h1 className='text-start'>Bem-vindo ✨</h1>
          <h5 className='text-start mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ut?
          </h5>
          <h5 className='text-start'>Lorem ipsum dolor sit.</h5>
          <h3 className='text-start mt-4'><a className="link-offset-2 link-underline link-underline-opacity-0 link-secondary" href="https://www.instagram.com/sleeppymiau/" target="_blank">🦋 Instagram</a></h3>
        </Col>
      </Row>
    </Container>
  );
}

export default BioSection;
