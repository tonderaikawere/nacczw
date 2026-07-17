import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4">About Us</Typography>
      <Typography variant="h5">Who We Are</Typography>
      <Typography variant="body1">
        The National Association of Christian Churches (NACC) is a Membership Faith-Based Community of Churches that brings together Apostolic, Zion, Pentecostal, and other like-minded churches and institutions across Zimbabwe.
      </Typography>
      <Typography variant="body1">
        Our diverse membership reflects a commitment to inclusivity and collaboration, ensuring that all member churches can benefit from shared resources, knowledge, and support.
      </Typography>
      <Button onClick={() => navigate('/about')}>Learn More</Button>
    </Box>
  );
};

export default AboutSection;
