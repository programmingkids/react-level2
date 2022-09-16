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
import {Layout} from './components/layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
