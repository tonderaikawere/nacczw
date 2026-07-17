import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const VolunteerSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/images/img1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: 12,
        textAlign: 'center',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(33, 128, 0, 0.75))',
          zIndex: 1,
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700, mb: 2, textTransform: 'uppercase' }}>
          Serve With Us
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 3 }}>
          Become a Volunteer Today
        </Typography>
        <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 4, fontSize: '1.1rem' }}>
          Join us in our community outreach initiatives combining faith, local entrepreneurship, agricultural training, and social impact in Zimbabwe.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/contact" sx={{ px: 5, py: 1.5 }}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default VolunteerSection;
