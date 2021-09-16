import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './Components/MyNavbar'
import MyHome from './Components/MyHome'
import CompanyDetail from './Components/CompanyDetail'
import { Container } from  "react-bootstrap"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Container>
      <MyNavbar />
      <Route exact path="/" component={MyHome} />
      <Route exact path='/:companyName' component={CompanyDetail} />
    </Container>
    </Router>
  );
}

export default App;
