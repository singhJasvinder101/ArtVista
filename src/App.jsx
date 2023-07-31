// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" key={1} exact element={<Home/>} />
        <Route path="/paitings" key={2} exact element={<Home/>} />
        <Route path="/sculpture" key={3} exact element={<Home/>} />
        <Route path="/textile art" key={4} exact element={<Home/>} />
        <Route path="/folk Art" key={5} exact element={<Home/>} />
        <Route path="/traditional crafts" key={6} exact element={<Home/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
