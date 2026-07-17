import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Services: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">Our Services</Typography>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Services;
