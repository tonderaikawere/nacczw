import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const VolunteerSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Become a Volunteer Today</Typography>
      <Typography variant="body1">Join us in our community outreach initiatives.</Typography>
      <Link to="/contact"><Button>Get Started</Button></Link>
    </Box>
  );
};

export default VolunteerSection;
