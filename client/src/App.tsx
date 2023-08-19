import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <Routes> {/* 'Routes' bileşeni kullanılmalı */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </Router>
  );
}

export default App;
