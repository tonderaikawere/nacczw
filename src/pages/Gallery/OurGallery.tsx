import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const galleryImages = [
  '/images/img1.png', '/images/img2.png', '/images/img3.png',
  '/images/img4.png', '/images/img5.png', '/images/img6.png',
  '/images/img7.png', '/images/img8.png'
];

const OurGallery: React.FC = () => {
  return (
    <Box sx={{ pt: '64px' }}>
      <Box sx={{ py: 12, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Our Gallery
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {galleryImages.map((img, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                component="img"
                src={img}
                alt="Gallery item"
                sx={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.03)' }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default OurGallery;
