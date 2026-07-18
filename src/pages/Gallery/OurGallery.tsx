import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const galleryImages = [
  { img: '/images/img1.png', tag: 'Outreach', title: 'Felabusi Village Visit' },
  { img: '/images/img2.png', tag: 'Worship', title: 'Sunday Praise Service' },
  { img: '/images/img3.png', tag: 'Youth', title: 'Youth Bible Fellowship' },
  { img: '/images/img4.png', tag: 'Training', title: 'Leadership Summit Mutare' },
  { img: '/images/img5.png', tag: 'Outreach', title: 'Cattle Medication Distribution' },
  { img: '/images/img6.png', tag: 'Worship', title: 'Apostolic Fellowship Praise' },
  { img: '/images/img7.png', tag: 'Youth', title: 'Youth Music Choir' },
  { img: '/images/img8.png', tag: 'Training', title: 'Agricultural Project' },
  { img: '/images/about1.png', tag: 'Outreach', title: 'Food Donation Drive' },
  { img: '/images/hero.png', tag: 'Worship', title: 'Sunday Main Sanctuary' },
  { img: '/images/hero2.png', tag: 'Youth', title: 'Youth Camp Gathering' },
  { img: '/images/hero3.png', tag: 'Training', title: 'Pastor Ordination Ceremony' }
,
  { img: '/images/img1.png', tag: 'Worship', title: 'Bulawayo Worship Night' },
  { img: '/images/img2.png', tag: 'Outreach', title: 'Food Relief Harare' },
  { img: '/images/img3.png', tag: 'Training', title: 'Farming Practice Chinhoyi conservation workshop' },
  { img: '/images/img4.png', tag: 'Youth', title: 'Youth Netball Cup Gweru regional final championship' }
];

const OurGallery: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Our Gallery
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['All', 'Worship', 'Outreach', 'Youth', 'Training'].map((cat) => (
            <Button key={cat} variant="outlined" color="primary" sx={{ borderRadius: 1 }}>
              {cat}
            </Button>
          ))}
        </Box>
        <Grid container spacing={3}>
          {galleryImages.map((g, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <Box
                  component="img"
                  src={g.img}
                  alt={g.title}
                  sx={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(33, 128, 0, 0.8)',
                    opacity: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    transition: 'opacity 0.2s ease-in-out',
                    zIndex: 1,
                    '&:hover': { opacity: 1 }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem' }}>{g.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700 }}>{g.tag}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default OurGallery;
