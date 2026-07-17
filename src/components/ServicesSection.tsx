import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const ministriesList = [
  { title: "Children's Ministry", img: "/images/img2.png", desc: "Teaching children God's word through interactive, fun lessons." },
  { title: "Youth Ministry", img: "/images/img3.png", desc: "Empowering teenagers to connect, grow and build faith together." },
  { title: "Women's Ministry", img: "/images/img4.png", desc: "A supportive community of women dedicated to prayer and growth." }
];

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, backgroundColor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Our Ministries
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
            OUR MINISTRIES FOR WORSHIP, GROWTH AND SERVICE
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {ministriesList.map((m, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ border: '1px solid #E2E8F0', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" height="250" image={m.img} alt={m.title} sx={{ transition: 'transform 0.5s ease', '&:hover': { transform: 'scale(1.05)' } }} />
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>MINISTRY</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: '1.4rem' }}>{m.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>{m.desc}</Typography>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => navigate('/services')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ alignSelf: 'flex-start', p: 0, fontWeight: 700 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
