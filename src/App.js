import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="*" element={<Error></Error>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
