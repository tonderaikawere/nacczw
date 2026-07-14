import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import ServicesPageSection from '../../components/ServicesPageSection';

const Services: React.FC = () => {
  return (
    <Box className="Section">
      <Box
        sx={{
          position: 'relative',
          height: { xs: '100vh', md: '60vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          effect="fade"
          modules={[Autoplay]}
          className="heroSwiper"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <SwiperSlide>
            <Box
              component="img"
              src="/images/hero.png"
              alt="Hero Image 1"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component="img"
              src="/images/hero2.png"
              alt="Hero Image 2"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component="img"
              src="/images/hero3.png"
              alt="Hero Image 3"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component="img"
              src="/images/hero4.png"
              alt="Hero Image 4"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              component="img"
              src="/images/hero5.png"
              alt="Hero Image 5"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        </Swiper>

        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
            Our Services
          </Typography>
        </Box>

        <Box
          component="img"
          src="/images/logo.png"
          alt="NACC"
          sx={{ position: 'absolute', bottom: '20px', width: '40px', height: '40px' }}
        />
      </Box>

      <ServicesPageSection />
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Services;
