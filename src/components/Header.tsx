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
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'News & Events', path: '/blog' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src="/images/logo.png" alt="NACC Logo" style={{ height: '45px' }} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: path === link.path ? 'primary.main' : 'text.secondary',
                    mx: 1.5,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: path === link.path ? '30%' : '0%',
                      height: '2px',
                      bottom: '4px',
                      left: '35%',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.25s ease-in-out',
                    },
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                      '&:after': {
                        width: '30%',
                      },
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/donate" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">Donate</Button>
            </Link>
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
