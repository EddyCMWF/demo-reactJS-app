import './App.css';
import Container from 'react-bootstrap/Container';
import { SalesHistory } from './Components/SalesHistory';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container className="p-3 mb-3 bg-dark">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sales' element={<SalesHistory/>}/>
      </Routes>
    </Container>
  );
}

export default App;
