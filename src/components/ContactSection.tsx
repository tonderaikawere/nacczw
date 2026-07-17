import React from 'react';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
              Send us a message and we will get back to you as soon as we can.
            </Typography>
            <form action="https://formsubmit.co/naccchurch@gmail.com" method="POST">
              <TextField label="Full Name" name="name" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Email Address" name="email" type="email" fullWidth required sx={{ mb: 3 }} />
              <TextField label="Type your message" name="message" multiline rows={4} fullWidth required sx={{ mb: 3 }} />
              <input type="hidden" name="_captcha" value="false" />
              <Button type="submit" variant="contained">Send Message</Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Gwanda,Zimbabwe&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
