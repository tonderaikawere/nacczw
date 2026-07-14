import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { WhatsApp, Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Box
      sx={{
        backgroundColor: '#fff', // White background
        color: '#000', // Black text color
        padding: {xs:'20px', md:'20px 50px'},
        display: 'flex',
        justifyContent: {xs:'center', md:'space-between'},
        alignItems: {xs:'center', md:'center'},
        flexDirection:{xs:'column', md:'row'},
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
      }}
    >
      {/* Left: Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/logo.png" // Replace with the actual logo path
          alt="Logo"
          style={{ height: '40px' }}
        />
      </Box>

      {/* Center: Rights Reserved */}
      <Typography variant="body2">
        @{currentYear} All Rights Reserved
      </Typography>

      {/* Right: Social Media Icons */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& a': {
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          },
        }}
      >
        <IconButton
          component={Link}
          href="https://wa.me/+263785383686" // WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          }}
        >
          <WhatsApp />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.facebook.com/profile.php?id=61555980522114" // Facebook page URL
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={Link}
          href="https://instagram.com/nacczw" // Instagram page URL
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/nacczw" // Twitter handle
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={Link}
          href="https://youtube.com/@nacczw" // YouTube channel URL
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{
            color: '#218000', // Brand green color
            '&:hover': {
              color: '#218000', // Ensure green color on hover
            },
          }}
        >
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;