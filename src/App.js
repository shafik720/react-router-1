import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
