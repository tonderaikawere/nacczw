import React from 'react';
import { Box, Typography, Grid, Container, Divider } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: '#0F172A', color: '#CBD5E1', pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <img src="/images/logo.png" alt="NACC Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
            </Box>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              The National Association of Christian Churches (NACC) is a united faith-based community fostering spiritual and socio-economic growth in Zimbabwe.
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>Quick Links</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>Contact Us</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />
        <Typography variant="body2" sx={{ color: '#64748B' }}>
          &copy; {currentYear} National Association of Christian Churches. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
