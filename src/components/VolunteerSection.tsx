// src/components/VolunteerSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const VolunteerSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px', // Adjust as needed
        backgroundImage: 'url(/images/img1.png)', // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        padding: {xs: '20px 0', md:'20px 0'},
        overflow: 'hidden',
      }}
    >
      {/* Linear gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 12, 68, 0.5), rgba(0, 64, 128, 0.5))',
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          padding: {xs:'20px', md:'20px 150px'},
          borderRadius: '8px',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Become a Volunteer
        </Typography>
        <Typography variant="h6" paragraph>
          Join us in an innovative initiative that combines faith, entrepreneurship, and social impact! Become a volunteer today and help us make a difference.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link} to="/contact"
          sx={{
            mt: 2,
            backgroundColor: '#218000',
            '&:hover': {
              backgroundColor: '#000A3C',
            },
          }}
        >
          Become a Volunteer
        </Button>
      </Box>
    </Box>
  );
};

export default VolunteerSection;