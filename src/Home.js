import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className="Home " fluid>
      <Row className="h-100 d-flex flex-wrap">
        <Col className="Columns d-flex align-items-center">Name and Basic info</Col>
        <Col className="Columns d-flex align-items-center">Profile photo</Col>
      </Row>
    </Container>
  );
}

export default Home;
