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
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        borderTop: '4px solid #E5A900', // Gold top-line typical of Emanu header
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
              <img src="/images/logo.png" alt="NACC Logo" style={{ height: '48px' }} />
            </Link>
          </Box>

          {/* Centered Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: path === link.path ? 'primary.main' : 'text.primary',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    px: 2,
                    position: 'relative',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Right CTA */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/donate" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  borderRadius: 1,
                  px: 3,
                  py: 1,
                }}
              >
                Donation
              </Button>
            </Link>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' }, color: 'text.primary' }}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{
              '& .MuiDrawer-paper': {
                width: 280,
                padding: '24px 16px',
              },
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton onClick={toggleDrawer} sx={{ color: 'text.primary' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color: path === link.path ? 'primary.main' : 'text.primary',
                      fontWeight: 600,
                      padding: '10px 16px',
                      backgroundColor: path === link.path ? 'rgba(33, 128, 0, 0.08)' : 'transparent',
                      '&:hover': { backgroundColor: 'rgba(33, 128, 0, 0.05)' }
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link to="/donate" style={{ textDecoration: 'none', marginTop: '16px' }}>
                <Button variant="contained" color="secondary" fullWidth sx={{ fontWeight: 700 }}>
                  Donation
                </Button>
              </Link>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
