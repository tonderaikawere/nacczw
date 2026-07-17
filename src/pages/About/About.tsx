import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import InfoSectionPage from '../../components/InfoSectionPage';

const About: React.FC = () => {
  return (
    <Box>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
          About Us
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <InfoSectionPage />
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default About;
