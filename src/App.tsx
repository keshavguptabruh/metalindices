import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UploadData from './pages/UploadData';
import Indices from './pages/Indices';
import MapVisualization from './pages/MapVisualization';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadData />} />
            <Route path="/indices" element={<Indices />} />
            <Route path="/map" element={<MapVisualization />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;