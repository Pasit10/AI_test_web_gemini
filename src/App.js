import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import ArticleComponent from './ArticleComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/articles/:id" element={<ArticleComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
