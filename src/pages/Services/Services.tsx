import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const services = [
  { title: "Weekly Sunday Worship", desc: "Our central gathering for worship, praise, and sound biblical teaching every Sunday." },
  { title: "Outreach & Community Support", desc: "Farming training, clothing donations, and spiritual assistance in remote villages." },
  { title: "Counseling & Family Support", desc: "Biblical marriage and personal counseling sessions scheduled with local branch leadership." }
];

const Services: React.FC = () => {
  return (
    <Box>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
          Our Services
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((svc, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '12px', height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>{svc.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{svc.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Services;
