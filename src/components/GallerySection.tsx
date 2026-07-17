import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GallerySection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4">Our Gallery</Typography>
      <Button onClick={() => navigate('/gallery')}>View More</Button>
    </Box>
  );
};

export default GallerySection;
