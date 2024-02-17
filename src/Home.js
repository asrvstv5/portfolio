import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profilePic from './profile.jpeg';
import background from './background.svg';

function Home() {
  return (
    <Container className="Home " fluid>
      <div className="background" src={background}/>
      <Row className="h-100 d-flex flex-wrap">
        <Col className="Columns vertical-center align-items-center">
              <div className="element-centered">
                <h1>Amitesh Srivastava</h1>
                <h3>Software Engineer</h3>
              </div>
        </Col>
        <Col className="Columnsa d-flex align-items-center">
          <img src={profilePic} className="ProfilePic" alt="Amitesh Srivastava" height="500" width="500" sizes="{max-width:500px} 100vw, 500px"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
