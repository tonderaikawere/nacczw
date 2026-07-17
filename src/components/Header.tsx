import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src="/images/logo.png" alt="NACC Logo" style={{ height: '45px' }} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                <Button sx={{ color: path === link.path ? 'primary.main' : 'text.secondary', mx: 1 }}>
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
            <Box onClick={toggleDrawer} sx={{ width: 250, p: 2 }}>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} style={{ textDecoration: 'none', display: 'block' }}>
                  <Button fullWidth sx={{ justifyContent: 'flex-start' }}>{link.label}</Button>
                </Link>
              ))}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
