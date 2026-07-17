import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Donation: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">Donate & Support</Typography>
      <Typography variant="body1">Make a donation to help support NACC.</Typography>
      <Button onClick={() => alert('Redirecting to checkout...')}>Donate Now</Button>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Donation;
