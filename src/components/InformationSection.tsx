import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Link } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, WhatsApp } from '@mui/icons-material';

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <WhatsApp />,
    text: '+263 77 309 2522',
    link: 'https://wa.me/+263773092522',
  },
  {
    icon: <Phone />,
    text: '+263 71 232 1334',
    link: 'tel:+263712321334',
  },
  {
    icon: <Email />,
    text: 'naccchurch@gmail.com',
    link: 'mailto:naccchurch@gmail.com',
  },
  {
    icon: <LocationOn />,
    text: 'Main Branch - Gwanda',
    link: 'https://maps.google.com?q=Gwanda,+Zimbabwe',
  },
  {
    icon: <AccessTime />,
    text: 'Mon - Fri: 08:00am - 16:00pm',
  },
];

const InformationSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#218000',
        color: '#fff',
        padding: { xs: '20px', md: '40px 80px' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      {/* Left: Our Services */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>
          Our Services
        </Typography>
        <List sx={{ padding: 0 }}>
          {['Sunday Services', 'Prayer Groups', 'Baptisms', 'Marriage Counseling', 'Community Outreach', 'Bible Study', 'Youth Programs'].map(service => (
            <ListItem key={service} sx={{ padding: 0 }}>
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Center: Our Partners */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>
          Our Partners
        </Typography>
        <List sx={{ padding: 0 }}>
          {['Main Branch - Gwanda', 'Harare Branch', 'Bulawayo Branch', 'Felabusi Village Church'].map(partner => (
            <ListItem key={partner} sx={{ padding: 0 }}>
              <ListItemText primary={partner} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right: Church Branches */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: { xs: '20px', md: '0' },
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>
          Church Branches
        </Typography>
        <List sx={{ padding: 0 }}>
          {['Main Branch - Gwanda', 'Harare Branch', 'Bulawayo Branch', 'Felabusi Village Church'].map(branch => (
            <ListItem key={branch} sx={{ padding: 0 }}>
              <ListItemText primary={branch} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Get In Touch */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>
          Get In Touch
        </Typography>
        {contactInfo.map(({ icon, text, link }, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <IconButton sx={{ color: '#fff' }} component={link ? 'a' : 'span'} href={link} target={link && link.startsWith('http') ? '_blank' : undefined}>
              {icon}
            </IconButton>
            <Link href={link} color="#fff" underline="none" sx={{ marginLeft: '10px' }}>
              <Typography variant="body1">{text}</Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InformationSection;