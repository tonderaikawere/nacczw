// src/components/GetStartedSection.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface GetStartedSectionProps {}

const GetStartedSection: React.FC<GetStartedSectionProps> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '40px 20px', md: '40px 50px' },
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Left Side - Content */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          Get Started with NACC
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome to the National Association of Christian Churches!
        </Typography>
        <Typography paragraph>
          We are delighted that you are considering joining our vibrant community of faith-based organizations. Here's how you can get started with us:
        </Typography>

        {/* Step 1 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
          <Box
            sx={{
              backgroundColor: '#218000',
              color: '#fff',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              marginRight: '15px',
            }}
          >
            1
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Explore and Connect
            </Typography>
            <Typography paragraph>
              Explore our website to learn about our mission, vision, and services. Contact us for more information or specific questions.
            </Typography>
          </Box>
        </Box>

        {/* Step 2 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
          <Box
            sx={{
              backgroundColor: '#218000',
              color: '#fff',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              marginRight: '15px',
            }}
          >
            2
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Apply for Membership
            </Typography>
            <Typography paragraph>
              To become a member of NACC, complete our membership application process.
            </Typography>
          </Box>
        </Box>

        {/* Step 3 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Box
            sx={{
              backgroundColor: '#218000',
              color: '#fff',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              marginRight: '15px',
            }}
          >
            3
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Engage and Grow
            </Typography>
            <Typography paragraph>
              Once your membership is confirmed, you can start using our programs and services.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Image */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', md: 'block' },
          textAlign: 'center',
        }}
      >
        <img
          src="/images/img3.png"
          alt="NACC Get Started"
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </Box>
    </Box>
  );
};

export default GetStartedSection;