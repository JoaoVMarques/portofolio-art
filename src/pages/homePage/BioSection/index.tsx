import {
  Col, Container, Image, Row,
} from 'react-bootstrap';
import placeholderImage from '../../../imgs/placeholder.jpg';
import Instagram from '../../../imgs/svgs/instagram.svg';

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
          <h5 className='text-start mb-4'>Lorem ipsum dolor sit.</h5>
          <a href='/' target="_blank">
            <Image src={Instagram} width={30}/>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default BioSection;
