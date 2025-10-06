// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comp/home';
import Media from './comp/media';
import Navbar from './comp/navbar'; // You'll create this next
import Diwali from './comp/diwali';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path='/diwali' element={<Diwali/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
