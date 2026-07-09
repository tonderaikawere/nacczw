// src/components/AboutSection.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/about'); // Navigates to the About page when clicked
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'20px',
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, side by side on larger
      }}
    >
      {/* Left Side: Large Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium and up
          display: 'flex',
          justifyContent: 'center', // Center the image


          marginBottom: { xs: '20px', md: '0' }, // Margin bottom on small screens
        }}
      >
        <Box
          component="img"
          src="/images/about1.png" // Replace with your image path
          alt="About Us Large Image"
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '100%' },
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for better visual separation
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium and up
          marginTop: { xs: '20px', md: '0' }, // Margin top on small screens
          paddingLeft: { xs: '0', md: '20px' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#101010', marginBottom: '20px', fontWeight: '700' }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: '#101010', marginBottom: '20px', fontWeight: '700' }}
        >
          Who We Are
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        The National Association of Christian Churches (NACC) is a Membership Faith-Based
        Community of Churches that brings together Apostolic, Zion, Pentecostal, and other
        like-minded churches and institutions across Zimbabwe. Founded on the principles of
        unity and service, NACC aims to foster spiritual and socio-economic growth within the
        communities it serves.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Our diverse membership reflects a commitment to inclusivity and collaboration,
        ensuring that all member churches can benefit from shared resources, knowledge,
        and support. By uniting different denominations under one association, we aim to
        strengthen the Christian community and amplify its positive impact on society.
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#218000', color: '#fff' }}
          onClick={handleViewMore}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;