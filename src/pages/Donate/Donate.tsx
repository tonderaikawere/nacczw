import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid, Button } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const Donation: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Donate & Support
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary', maxW: '800px', mx: 'auto' }}>
          Your generous financial support funds local agricultural projects, pastoral certifications, leadership summits, and youth development training in remote districts across Zimbabwe.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', height: '100%', borderLeft: '4px solid #218000' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>Mobile Money Transfers</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 2 }}><strong>EcoCash Merchant Code:</strong> *151*2*2*309252# (NACC Church) - Please confirm recipient is registered as NACC before entering PIN.</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 2 }}><strong>Mukuru Recipient:</strong> Pastor S. Moyo (+263 77 309 2522) - Gwanda Branch</Typography>
                <Typography variant="body2" sx={{ display: 'block' }}><strong>WorldRemit / Innbucks:</strong> Send transfer to +263 77 309 2522</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', height: '100%', borderLeft: '4px solid #E5A900' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>Direct Bank Transfers</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 2 }}><strong>Bank Name:</strong> Steward Bank Zimbabwe</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 2 }}><strong>Account Name:</strong> National Association of Christian Churches</Typography>
                <Typography variant="body2" sx={{ display: 'block', mb: 2 }}><strong>Account Number:</strong> 1009230985 (USD Account)</Typography>
                <Typography variant="body2"><strong>Branch:</strong> Harare Main Branch</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, p: 4, backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, textAlign: 'center' }}>Giving Impact Calculator</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: 'text.secondary' }}>Select or enter a donation amount (USD) to see the potential impact in our rural missions.</Typography>
          <Grid container spacing={3} justifyContent="center">
            {[20, 50, 100, 250].map((amt) => (
              <Grid item key={amt}>
                <Button variant="outlined" color="primary" sx={{ px: 4, py: 1.5, fontWeight: 700 }}>
                  ${amt} USD
                </Button>
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ mt: 4, textAlign: 'center', fontWeight: 700, color: 'primary.main' }}>
            A contribution of $50 USD funds 1 complete Agricultural Training Pack for a small farmer.
          </Typography>
        </Box>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Donation;
