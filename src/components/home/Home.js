import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css'
import ConcreteImg from '../../images/concrete.jpeg'


const Home = () => {
  return (
    <Container fluid>
      <Row className='topRow'>
        <Col className='hero_header'>
            <h1 className='hero_h1'>Iate University</h1>
            <h3>Use this app to conduct all of your concrete estimates!</h3>
            <p>
            Concrete and Hard Labor work are staples in the Polynesian Community 
            When Pacific Islanders started migrating to the states. Looking for 
            opportunities to take care of their families. Their
            generational experiences of hard labor lead them to becoming experts in Concrete.
     
           </p>
           <Button size='lg'>Use Estimator </Button>
        </Col>
        <Col>
          <img className='Hero_Img' src={ConcreteImg}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
