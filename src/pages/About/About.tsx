// src/pages/About/About.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import InfoSectionPage from '../../components/InfoSectionPage';
import VolunteerSection from '../../components/VolunteerSection';

const About: React.FC = () => {
  return (
    <Box className='Section'>
      <Box
      sx={{
        position: 'relative',
        height: {xs:'100vh', md:'60vh'},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Swiper container for background images */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 5000, // Adjust delay as needed
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade" // Fading effect between slides
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
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero2.png"
            alt="Hero Image 2"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero3.png"
            alt="Hero Image 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero4.png"
            alt="Hero Image 4"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="/images/hero5.png"
            alt="Hero Image 5"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Text content */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
          About Us
        </Typography>
        
      </Box>

      <Box
        component="img"
        src="/images/logo.png"
        alt="NACC"
        sx={{ position: 'absolute', bottom: '20px', width: '40px', height: '40px' }}
      />
    </Box>
    <Box
      className="Info"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, side by side on larger
      }}
    >
      {/* Left Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and up
          display: 'flex',
          justifyContent: 'center', // Center the image
          marginBottom: { xs: '20px', md: '0' }, // Margin bottom on small screens
        }}
      >
        <Box
          component="img"
          src="/images/about1.png"
          alt="About NACC"
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '100%' },
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for better visual separation
          }}
        />
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '60%' }, // Full width on small screens, 60% on medium and up
          marginTop: { xs: '20px', md: '0' }, // Margin top on small screens
          paddingLeft: { xs: '0', md: '20px' },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Welcome to NACC!
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          The National Association of Christian Churches (NACC) is dedicated to uniting faith-based organizations under a shared mission of spiritual growth and community impact. We are committed to supporting churches, ministries, and individuals in their pursuit of a stronger connection with God and their communities.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Established in faith, NACC serves as a platform for growth and empowerment, offering a range of programs and services designed to help organizations and individuals strengthen their spiritual journey. We believe in making a positive impact through education, outreach, and mentorship.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Our vision for the future is to expand our reach, spreading God's love and wisdom across communities and beyond. Together, we will continue to build a network that uplifts, inspires, and transforms lives.
        </Typography>
      </Box>
    </Box>
    <InfoSectionPage/>
    <VolunteerSection/>
    <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
  );
};

export default About;
