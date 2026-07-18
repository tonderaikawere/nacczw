import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import InfoSectionPage from '../../components/InfoSectionPage';

const About: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          About Us
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <InfoSectionPage />
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our History</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
            The National Association of Christian Churches (NACC) was established as an ecumenical home for indigenous Christian institutions in Zimbabwe, particularly bringing together Apostolic, Zionist, Pentecostal, and other independent community ministries. Founded on the principle of spiritual unity, NACC was born out of a collective desire to help these institutions collaborate on national development, social empowerment, and spreading the gospel of peace.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
            Over the years, NACC has grown from a local support network into a recognized national body coordinating community outreach, leadership empowerment, and agricultural training across Zimbabwe's diverse provinces.
          </Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Core Beliefs</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>1. The Holy Scriptures</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We believe the Bible is the inspired, authoritative, and infallible Word of God, serving as our ultimate rule of faith and conduct.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>2. Spiritual Unity & Fellowship</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We foster active collaboration among diverse independent churches, working together under Christ to build a strong community.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>3. Social Empowerment</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We believe that local faith institutions should actively drive socio-economic growth, agricultural support, and community welfare.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>4. Integrity & Service</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We commit to serve with absolute honesty, transparency, and christ-centered compassion across all NACC branches.</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default About;
