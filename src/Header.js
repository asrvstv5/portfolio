import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';

function Header() {
  return (
    <Container className="Header" fluid>
      <Row>
        <Col className="Columns" style={{display:'flex', justifyContent:'left'}}>Amitesh Srivastava Logo</Col>
        <Col className="Columns" style={{display:'flex', justifyContent:'right'}}>
            <Col className="Columns">Home</Col>
            <Col>About</Col>
            <Col>Projects</Col>
            <Col>Socials</Col>
            <Col>Contact</Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
