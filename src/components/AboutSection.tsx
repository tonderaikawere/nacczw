import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  border: '4px solid #218000',
                  bottom: '-12px',
                  right: '-12px',
                  borderRadius: '12px',
                  zIndex: 0,
                }
              }}
            >
              <Box
                component="img"
                src="/images/about1.png"
                alt="NACC Gathering"
                sx={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
              About Us
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 3 }}>
              Who We Are & What We Do
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              The National Association of Christian Churches (NACC) is a membership faith-based community of churches bringing together Apostolic, Zion, Pentecostal, and other like-minded Christian institutions across Zimbabwe.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Founded on the pillars of unity, spiritual excellence, and service, NACC empowers and coordinates member churches to participate effectively in national development, social outreach, and spreading the gospel of peace.
            </Typography>
            <Button variant="contained" onClick={() => navigate('/about')}>Learn More</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
