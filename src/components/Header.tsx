import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Link to="/">
            <img src="/images/logo.png" alt="NACC Logo" />
          </Link>
        </Box>
        <Box>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/about"><Button>About</Button></Link>
          <Link to="/services"><Button>Services</Button></Link>
          <Link to="/blog"><Button>Blog</Button></Link>
          <Link to="/gallery"><Button>Gallery</Button></Link>
          <Link to="/contact"><Button>Contact</Button></Link>
        </Box>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer open={drawerOpen} onClose={toggleDrawer}>
          <Box onClick={toggleDrawer}>
            <Link to="/"><Button>Home</Button></Link>
            <Link to="/about"><Button>About</Button></Link>
            <Link to="/services"><Button>Services</Button></Link>
            <Link to="/blog"><Button>Blog</Button></Link>
            <Link to="/gallery"><Button>Gallery</Button></Link>
            <Link to="/contact"><Button>Contact</Button></Link>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
