import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import InfoSectionPage from '../../components/InfoSectionPage';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">About Us</Typography>
      <InfoSectionPage />
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default About;
