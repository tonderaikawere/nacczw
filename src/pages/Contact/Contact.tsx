import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Contact: React.FC = () => {
  return (
    <Box sx={{ pt: '64px' }}>
      <Box sx={{ py: 12, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
          Contact Us
        </Typography>
      </Box>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Contact;
