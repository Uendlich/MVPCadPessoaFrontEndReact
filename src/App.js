import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PessoaPage from './pages/CadastroPessoaPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro-pessoa" element={<PessoaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
