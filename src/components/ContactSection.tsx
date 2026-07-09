import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ display: {xs:'grid', md:'flex'}, justifyContent: 'space-between', padding: {xs:'20px', md:'20px 50px'}, backgroundColor: '#f9f9f9' }}>
      {/* Left Side - Contact Form */}
      <Box sx={{ width: { xs: '100%', md: '45%' } }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight:'700' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#666' }}>
          Send us a message and we will get back to you as soon as we can.
        </Typography>

        {/* Form */}
        <form action="https://formsubmit.co/naccchurch@gmail.com" method="POST">
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            label="Type your message"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ marginBottom: '20px' }}
          />

          {/* Hidden field to block spam */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Send Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#218000',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#218000',
                border: '1px solid #218000',
              },
            }}
          >
            SEND
          </Button>
        </form>
      </Box>

      {/* Right Side - Live Map */}
      <Box sx={{ width: { xs: '100%', md: '50%' }, marginTop: { xs: '40px', md: '0' } }}>
        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Gwanda,Zimbabwe&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactSection;