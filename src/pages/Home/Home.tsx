// src/pages/HomePage.tsx

import React, { useRef } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../../components/HeroSection'; // Import the HeroSection component
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import GallerySection from '../../components/GallerySection';

import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import BlogSection from '../../components/BlogSection';
import FAQSection from '../../components/FAQSection';
import VolunteerSection from '../../components/VolunteerSection';
import GetStartedSection from '../../components/GetStartedSection';

const HomePage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = (): void => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <Box ref={aboutRef}>
        <AboutSection />
      </Box>
      <ServicesSection />
      <BlogSection/>
      <GallerySection />
      <FAQSection/>
      <GetStartedSection/>
      <VolunteerSection/>
      
      <ContactSection />
      <InformationSection />
      <Footer />
    </>
  );
};

export default HomePage;