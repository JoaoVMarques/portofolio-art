import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import placeholderImage from '../../../imgs/placeholder.jpg';

function ExampleSection() {
  return (
    <Container className='section-background p-5'>
      <Row>
        <Col className='align-self-center'>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium obcaecati nobis dolore ullam?
          </h5>
          <Container className='text-center'>
            <Button className='w-50' size="lg">Portifólio</Button>
          </Container>
        </Col>
        <Col>
          <img src={placeholderImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default ExampleSection;
