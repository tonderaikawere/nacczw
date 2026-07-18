import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

const AppDownload: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Download Our App
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              NACC Mobile App
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '2.8rem' } }}>
              KEEP IN TOUCH WITH YOUR FELLOWSHIP
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              The NACC Mobile App bridges member congregations across Zimbabwe. Get updates on local outreach programs, access sermon archives, register for leadership summits, and send mobile donations securely through Ecocash or bank channels.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary" startIcon={<AndroidIcon />} onClick={() => alert('Redirecting to Google Play Store Store...')}>
                Google Play
              </Button>
              <Button variant="contained" color="secondary" startIcon={<AppleIcon />} onClick={() => alert('Redirecting to App Store...')}>
                App Store
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/img3.png"
              alt="App Promo Preview"
              sx={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppDownload;
