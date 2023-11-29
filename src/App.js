import './App.css';
import Container from 'react-bootstrap/Container';
import { SalesHistory } from './Components/SalesHistory';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { NotFound } from './Components/NotFound';
import Header from './Components/Header';

function App() {
  return (
    <Container className="p-3 mb-3 bg-dark">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">YourVAT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sales">Sales</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='sales' element={<SalesHistory/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Container>
  );
}

export default App;
