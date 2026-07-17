import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const GetStartedSection: React.FC = () => {
  const steps = [
    { num: 1, title: 'Explore & Connect', desc: 'Browse our mission and services to learn more.' },
    { num: 2, title: 'Apply for Membership', desc: 'Connect with a branch to formally register your church.' },
    { num: 3, title: 'Join Fellowship', desc: 'Participate in workshops, prayer groups, and local outreaches.' }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 6, textAlign: 'center' }}>
          Get Started with NACC
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={step.num}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#218000',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: 45,
                    height: 45,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}
                >
                  {step.num}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{step.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GetStartedSection;
