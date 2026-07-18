import React from 'react';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact Us
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
              GET IN TOUCH WITH NACC
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
              Send us a message regarding church registrations, membership applications, pastoral certifications, or community partnerships.
            </Typography>
            <form action="https://formsubmit.co/naccchurch@gmail.com" method="POST">
              <TextField label="Full Name" name="name" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Email Address" name="email" type="email" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Phone Number" name="phone" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Church / Ministry Name" name="church" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Type your message" name="message" multiline rows={4} fullWidth required sx={{ mb: 3 }} />
              <input type="hidden" name="_captcha" value="false" />
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
                <Button type="submit" variant="contained" size="large">Send Message</Button>
                <Button variant="outlined" color="primary" href="https://wa.me/263773092522" target="_blank" size="large" sx={{ borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}>
                  Chat on WhatsApp
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Gwanda,Zimbabwe&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
