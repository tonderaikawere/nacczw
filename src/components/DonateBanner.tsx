import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DonateBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/images/img8.png)',
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
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(33, 128, 0, 0.75))',
          zIndex: 1,
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          DONATE NOW
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '3.2rem' } }}>
          SUPPORT OUR MISSION THROUGH GIVING
        </Typography>
        <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 5, fontSize: '1.1rem', maxW: '700px', mx: 'auto' }}>
          Your generous support helps us continue our mission of spreading God's word, serving our community, and supporting those in need. Through your donation, we can expand our ministries.
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => navigate('/donate')} sx={{ px: 5, py: 1.5 }}>
          MAKE A DONATION
        </Button>
      </Container>
    </Box>
  );
};

export default DonateBanner;
