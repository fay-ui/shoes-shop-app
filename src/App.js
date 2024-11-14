import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
     
      <div className="container mt-4">
    
        <Routes>
          <Route path='/'element={<Layout/>} >
          <Route  index element={<Home />} /> 
          <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
      
    
    </BrowserRouter>
  );
}

export default App;
