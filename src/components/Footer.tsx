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
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 700 }}>Quick Links</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1, color: '#94A3B8' }}>Home</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1, color: '#94A3B8' }}>About Us</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1, color: '#94A3B8' }}>Services</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1, color: '#94A3B8' }}>Blog</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" sx={{ color: '#ffffff', mb: 2, fontWeight: 700 }}>Contact Us</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8', mb: 1 }}>Phone: +263 77 309 2522</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8', mb: 1 }}>Email: naccchurch@gmail.com</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>Address: Gwanda, Zimbabwe</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#64748B' }}>
            &copy; {currentYear} National Association of Christian Churches. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B' }}>
            Developed by <a href="https://kawerifytech.com" target="_blank" rel="noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }}>Kawerify Tech</a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
