import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const slides = [
    { img: '/images/hero.png', alt: 'Hero 1' },
    { img: '/images/hero2.png', alt: 'Hero 2' },
    { img: '/images/hero3.png', alt: 'Hero 3' },
    { img: '/images/hero4.png', alt: 'Hero 4' }
  ];

  return (
    <Box sx={{ position: 'relative', height: '80vh', backgroundColor: '#0F172A', color: '#FFFFFF', display: 'flex', alignItems: 'center' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Box component="img" src={slide.img} alt={slide.alt} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 100%)',
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: '650px' }}>
          <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 2 }}>
            National Association of Christian Churches
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#CBD5E1' }}>
            A united faith-based church community fostering spiritual, social, and socio-economic growth in Zimbabwe.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/about')}>Learn More</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
