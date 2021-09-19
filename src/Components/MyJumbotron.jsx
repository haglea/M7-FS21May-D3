import { Container, Jumbotron} from 'react-bootstrap';
import "./MyJumbotron.css";
import { Link } from 'react-router-dom'

const MyJumbotron = () => (

<Jumbotron fluid>
  <Container className="d-flex flex-column align-items-center">
    <h1>Remotive Remote Jobs</h1>    
    <Link to="/favourites" className="btn btn-outline-secondary ">Favourites</Link>    
  </Container>
</Jumbotron>

)

export default MyJumbotron;