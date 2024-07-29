import { Col, Container, Row } from 'react-bootstrap';
import placeholderImage from '../../../imgs/placeholder.jpg';

function ImageSection() {
  return (
    <Container className='mt-5 container-fluid section-background-primary '>
      <Row>
        <Col>
          <img width={440} src={placeholderImage} />
        </Col>
        <Col>
          <img width={440} src={placeholderImage} />
        </Col>
        <Col>
          <img width={440} src={placeholderImage} />
        </Col>
        <Col>
          <img width={440} src={placeholderImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageSection;
