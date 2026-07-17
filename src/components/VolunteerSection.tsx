import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';

const VolunteerSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              OUR CHRISTIAN VALUES
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
              OUR CHRISTIAN VALUES THAT LEAD OUR MINISTRY
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
              Our Christian values are the foundation of everything we do as a church. Guided by faith, love, compassion, and integrity, we are committed to serving God.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Button variant="contained" size="large" onClick={() => navigate('/donate')}>DONATE NOW</Button>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: 'primary.main', color: '#ffffff', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                  <PhoneIcon sx={{ m: 'auto' }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>CALL US!</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 800 }}>+263 77 309 2522</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 4, height: '100%', border: '1px solid #E2E8F0', boxShadow: 'none' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>PRAYER SUPPORT</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our Prayer Support team stands with you in faith during every season of life.</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ p: 4, height: '100%', border: '1px solid #E2E8F0', boxShadow: 'none' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: 'primary.main' }}>FELLOWSHIP GROUPS</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our groups offer spaces to build genuine relationships and study scriptures together.</Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VolunteerSection;
