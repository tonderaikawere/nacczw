// National Association of Christian Churches App Router - Final Verified Expanded Build Complete
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import AppDownload from './components/AppDownload';

import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import OurGallery from './pages/Gallery/OurGallery';
import Donation from './pages/Donate/Donate';

import { useEffect } from 'react';

const PageTitleUpdater: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'Home - National Association of Christian Churches (NACC)',
      '/about': 'About Us - NACC Zimbabwe',
      '/services': 'Our Services - NACC Worship',
      '/blog': 'News & Events - NACC Fellowship',
      '/gallery': 'Media Gallery - NACC Gallery',
      '/contact': 'Contact Us - NACC Offices',
      '/donate': 'Donate & Support - Giving to NACC',
      '/app-download': 'Download App - NACC Mobile'
    };
    document.title = titles[location.pathname] || 'National Association of Christian Churches';
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <PageTitleUpdater />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<OurGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/app-download" element={<AppDownload />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
