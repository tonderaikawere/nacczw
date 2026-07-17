import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box>
      <Typography>@{currentYear} All Rights Reserved</Typography>
    </Box>
  );
};

export default Footer;
