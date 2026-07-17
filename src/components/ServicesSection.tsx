import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  { id: 1, title: 'Morning Prayer', time: '6:00 AM' },
  { id: 2, title: 'Prayer Groups', time: 'Wednesdays 7:00 PM' },
  { id: 3, title: 'Sunday Services', time: '9:00 AM & 11:00 AM' },
  { id: 4, title: 'Marriage Counseling', time: 'By Appointment' },
  { id: 5, title: 'Community Outreach', time: 'Saturdays 10:00 AM' },
  { id: 6, title: 'Bible Study', time: 'Fridays 7:00 PM' },
  { id: 7, title: 'Youth Programs', time: 'Sundays 3:00 PM' },
  { id: 8, title: 'Baptisms', time: 'Sundays 3:00 PM' },
];

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
            Our Services
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
            Worship & Ministry Programs
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {servicesList.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                  border: '1px solid #E2E8F0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 10px 25px rgba(33, 128, 0, 0.08)',
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{service.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>{service.time}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" onClick={() => navigate('/services')}>View All Services</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
