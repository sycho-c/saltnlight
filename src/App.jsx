import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResourceList from './components/ResourceList';
import InstallButton from './components/InstallButton';
import ResourceDetail from './components/ResourceDetail';

function App() {
  return (
    <Router>
      <Header />
      <InstallButton />
      <main>
        <section className="resource-list">
          <Routes>
            <Route path="/" element={<ResourceList />} />
            <Route path="/resource/:id" element={<ResourceDetail />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App; 