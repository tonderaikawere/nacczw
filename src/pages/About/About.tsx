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
            Over the years, NACC has grown from a local support network into a recognized national body:
- **2009:** Established initial ecumenical gatherings of indigenous apostolic and Zionist elders in Gwanda to foster mutual support.
          </Typography>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Core Beliefs</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>1. The Holy Scriptures</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We believe the Bible is the inspired, authoritative, and infallible Word of God, serving as our ultimate rule of faith and conduct. Referencing 2 Timothy 3:16 and Psalm 119:105 to guide our daily walk.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>2. Spiritual Unity & Fellowship</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We foster active collaboration among diverse independent churches, working together under Christ to build a strong community. Referencing John 17:21 and Ephesians 4:3 to maintain the bond of peace.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>3. Social Empowerment</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We believe that local faith institutions should actively drive socio-economic growth, agricultural support, and community welfare. Referencing Galatians 6:10 and James 2:17 to show our faith through social action.</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>4. Integrity & Service</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>We commit to serve with absolute honesty, transparency, and christ-centered compassion across all NACC branches. Referencing Colossians 3:23 and Proverbs 11:3 to ensure honest, faithful stewardship.</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Executive Board</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Rev. Dr. J. Moyo</Typography>
                <Typography variant="caption" color="text.secondary">National President</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem', color: 'text.secondary' }}>Serving NACC since 2009. Former theological lecturer with a passion for ecumenical unity.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Pastor E. Sibanda</Typography>
                <Typography variant="caption" color="text.secondary">General Secretary</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem', color: 'text.secondary' }}>Coordinating office administrations and member church registrations nationwide.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Deaconess R. Gumbo</Typography>
                <Typography variant="caption" color="text.secondary">National Treasurer</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem', color: 'text.secondary' }}>Managing fund allocations, annual subscriptions audits, and financial reporting.</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', textAlign: 'center', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Bishop M. Khumalo</Typography>
                <Typography variant="caption" color="text.secondary">Trustee Chairman</Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: 'primary.main' }}>Our Departments & Leagues</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            To efficiently manage the diverse community support services, NACC operates through several structured departments:
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}><strong>1. NACC Women's League:</strong> Empowering women through fellowship, prayer meetings, and small scale trade classes.</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}><strong>2. NACC Youth Fellowship:</strong> Nurturing character and leadership skills in youth through bible camps and community cleanup outreaches.</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}><strong>3. Agricultural & Livestock Projects:</strong> Providing training in cattle maintenance, farming techniques, and climate adaptation in rural villages.</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'block' }}><strong>4. Welfare & Disaster Support:</strong> Coordinating food relief, medicine kits, and welfare packages during national emergencies.</Typography>
        </Box>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default About;
