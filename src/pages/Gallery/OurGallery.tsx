import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import GalleryPageSection from '../../components/GalleryPageSection';

const OurGallery: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">Our Gallery</Typography>
      <GalleryPageSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default OurGallery;
