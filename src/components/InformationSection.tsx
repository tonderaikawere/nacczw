import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const InformationSection: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#218000', color: '#FFFFFF', borderTop: '4px solid #E5A900' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Harare Office (HQ)</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>45 Samora Machel Ave, Harare</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 242 756401</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: harare@nacc.co.zw</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Bulawayo Branch</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>120 Leopold Takawira Ave, Bulawayo</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 9 883011</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: bulawayo@nacc.co.zw</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Gweru Branch</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>88 Main Street, Gweru</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 54 220309</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: gweru@nacc.co.zw</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Masvingo Branch</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>55 Robert Mugabe Way, Masvingo</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 39 264022</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: masvingo@nacc.co.zw</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Chinhoyi Branch</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>12 Magamba Way, Chinhoyi</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 67 210988</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: chinhoyi@nacc.co.zw</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Gwanda Office</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>14 Main Street, Gwanda</Typography>
            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>Phone: +263 77 309 2522</Typography>
            <Typography variant="body2" sx={{ display: 'block' }}>Email: naccchurch@gmail.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InformationSection;
