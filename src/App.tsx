// National Association of Christian Churches App Router
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import AppDownload from './components/AppDownload';

import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import OurGallery from './pages/Gallery/OurGallery';
import OurTeam from './pages/Team/OurTeam';
import Donation from './pages/Donate/Donate';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<OurGallery />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/app-download" element={<AppDownload />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;