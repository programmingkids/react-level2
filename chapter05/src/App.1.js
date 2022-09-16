import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import {Books} from './components/pages/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
