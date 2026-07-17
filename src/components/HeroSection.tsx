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
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', p: 4, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 2 }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>120+</Typography>
                <Typography variant="body2" sx={{ color: '#CBD5E1', fontWeight: 600 }}>Community Events</Typography>
              </Box>
              <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 2 }}>
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>50+</Typography>
                <Typography variant="body2" sx={{ color: '#CBD5E1', fontWeight: 600 }}>Volunteers Serving</Typography>
              </Box>
              <Box>
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>15+</Typography>
                <Typography variant="body2" sx={{ color: '#CBD5E1', fontWeight: 600 }}>Years of Ministry</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
