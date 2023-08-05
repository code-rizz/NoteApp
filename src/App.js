import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Category from './pages/Category';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
