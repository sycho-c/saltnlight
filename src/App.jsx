import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ResourceList from './components/ResourceList';
import ResourceDetail from './components/ResourceDetail';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <section className="resource-list">
          <Routes>
            <Route path="/" element={<Navigate to="/saltnlight" replace />} />
            <Route path="/saltnlight" element={<ResourceList />} />
            <Route path="/saltnlight/resource/:id" element={<ResourceDetail />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App; 
