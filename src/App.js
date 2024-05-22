import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Details from './Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
