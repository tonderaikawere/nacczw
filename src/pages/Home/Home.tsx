import React, { useRef } from 'react';
import { Box } from '@mui/material';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import ServicesSection from '../../components/ServicesSection';
import BlogSection from '../../components/BlogSection';
import FAQSection from '../../components/FAQSection';
import VolunteerSection from '../../components/VolunteerSection';
import GetStartedSection from '../../components/GetStartedSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import ScriptureTicker from '../../components/ScriptureTicker';

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Scripture Marquee Ticker */}
      <ScriptureTicker />
      {/* About Section */}
      <Box ref={aboutRef}>
        <AboutSection />
      </Box>
      {/* Services/Ministries Grid */}
      <ServicesSection />
      {/* Volunteer / Values Section */}
      <VolunteerSection />
      {/* Get Started */}
      <GetStartedSection />
      {/* Blog/Sermons Grid */}
      <BlogSection />
      {/* FAQs */}
      <FAQSection />
      {/* Contact Forms */}
      <ContactSection />
      {/* Footer Info */}
      <InformationSection />
      {/* Main Footer */}
      <Footer />
    </>
  );
};

export default Home;
