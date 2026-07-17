import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const InformationSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#218000', color: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Our Services</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Sunday Services</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Prayer Groups</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Baptisms</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Marriage Counseling</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Our Partners</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Main Branch - Gwanda</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Harare Branch</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Bulawayo Branch</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Office Hours</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Mon - Fri: 08:00am - 16:00pm</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Saturday: 09:00am - 12:00pm</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InformationSection;
