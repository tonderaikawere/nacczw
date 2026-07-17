import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Donation: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 12, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Donate & Support
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Your support helps us fund agricultural workshops, youth mentorship groups, and rural community outreaches across Zimbabwe.
        </Typography>
        <Button variant="contained" size="large" onClick={() => alert('Redirecting to checkout...')}>
          Donate Now
        </Button>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Donation;
