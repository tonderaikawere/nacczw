import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Contact: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">Contact Us</Typography>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Contact;
