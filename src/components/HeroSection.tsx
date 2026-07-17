import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h2">National Association Of Christian Churches</Typography>
      <Typography variant="body1">A united faith-based church community fostering spiritual growth in Zimbabwe.</Typography>
      <Button onClick={() => navigate('/about')}>Learn More</Button>
    </Box>
  );
};

export default HeroSection;
