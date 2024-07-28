import { Col, Container, Row } from 'react-bootstrap';
import placeholderImage from '../../../imgs/placeholder.jpg';

function ImageSection() {
  return (
    <Container className='mt-5 container-fluid section-background-primary '>
      <Row>
        <Col className='d-flex justify-content-between'>
          <img width={430} src={placeholderImage} />
          <img width={430} src={placeholderImage} />
          <img width={430} src={placeholderImage} />
          <img width={430} src={placeholderImage} />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageSection;
