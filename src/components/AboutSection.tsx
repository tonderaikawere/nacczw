import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, backgroundColor: '#FDFDFD' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src="/images/about1.png"
                alt="About us"
                sx={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'secondary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ffffff',
                  boxShadow: '0 10px 25px rgba(229, 169, 0, 0.4)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translate(-50%, -50%) scale(1.1)' }
                }}
                className="play-glow-ripple" onClick={() => alert('Opening video player...')}
              >
                <PlayArrowIcon sx={{ fontSize: '40px' }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              About Us
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2.2rem', md: '3.2rem' }, lineHeight: 1.2 }}>
              OUR STORY FAITH MISSION & VISION TOGETHER
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Our story is rooted in a deep commitment to sharing God's love and guiding people toward a meaningful relationship with Christ. NACC empowers and coordinates member churches to participate effectively in national development, social outreach, and spreading the gospel of peace.
            </Typography>
            <Grid container spacing={4} sx={{ mb: 5 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>OUR MISSION</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our mission is to share God's love, guide people in faith, and foster united communities.</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>OUR VISION</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our vision is to empower emerging leaders and support spiritual growth across nations.</Typography>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" onClick={() => navigate('/about')}>LEARN MORE ABOUT</Button>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Cody Fisher</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>CEO & Lead Pastor</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
