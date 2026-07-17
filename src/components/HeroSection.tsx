import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', height: '100vh', backgroundColor: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      >
        <source src="https://demo.awaikenthemes.com/assets/videos/emanu-hero-video.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.45) 100%)',
          zIndex: 1,
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, pt: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Growing Together in Christ
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.15 }}>
                JOIN OUR COMMUNITY OF FAITH TODAY
              </Typography>
              <Typography variant="body1" sx={{ mb: 5, color: '#CBD5E1', maxW: '600px' }}>
                We are committed to sharing God's love through relationships, fellowship and opportunities to serve others. Whether you are new to faith or seeking a deeper connection, you will find guidance and encouragement.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" onClick={() => navigate('/contact')}>JOIN OUR CHURCH</Button>
                <Button variant="outlined" color="inherit" size="large" onClick={() => navigate('/about')} sx={{ borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}>GET STARTED</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
