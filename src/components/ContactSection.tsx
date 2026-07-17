import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">Contact Us</Typography>
      <form action="https://formsubmit.co/naccchurch@gmail.com" method="POST">
        <TextField label="Full Name" name="name" required />
        <TextField label="Email Address" name="email" type="email" required />
        <TextField label="Message" name="message" multiline rows={4} required />
        <Button type="submit">SEND</Button>
      </form>
    </Box>
  );
};

export default ContactSection;
