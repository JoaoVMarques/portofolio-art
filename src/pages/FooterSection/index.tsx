import { Col, Container, Row } from 'react-bootstrap';
import placeholderImage from '../../imgs/placeholder.jpg';

function FooterSection() {
  return (
    <footer>
      <Container className='mt-5 section-background p-5'>
        <Row>
          <Col>
          </Col>
          <Col>
            <img width={200} src={ placeholderImage } />
          </Col>
          <Col>
            <p>
              myau•asd
              <br />
              email@email.com
              <br />
              Lorem, ipsum.
            </p>
          </Col>
          <Col>
            <p>
              Lorem, ipsum.
              <br />
              Lorem, ipsum.
              <br />
              Lorem, ipsum.
            </p>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;
