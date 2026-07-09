import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  onScrollToAbout?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToAbout }) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/about'); // Navigates to the About page when clicked
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align to the left
        textAlign: 'left', // Left-align text
        backgroundColor: '#000',
        color: '#FFFFFF', // White text
        overflow: 'hidden',
      }}
    >
      {/* Swiper container for background images */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
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
      </Swiper>

      {/* Text content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          paddingLeft: '2rem', // Add padding for left-aligned content
          maxWidth: '650px', // Adjust max width for content
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              marginTop: '10px',
              color: '#FFFFFF', // Heading in white
            }}
          >
            Welcome to
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              marginTop: '10px',
              color: '#FFFFFF', // Heading in white
            }}
          >
            National Association Of Christian Churches
          </Typography>
        </Box>

        {/* Static Paragraph */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2rem',
            color: '#FFFFFF', // Paragraph in white
            display: { xs: 'none', md: 'block' }
          }}
        >
          A united Church Community that meaningfully contributes to the spiritual and social-economic growth of Zimbabwe.
        </Typography>

        {/* Learn More Button */}
        <Button
          variant="contained"
          sx={{ backgroundColor: '#218000', color: '#fff', marginTop:'1%' }}
          onClick={handleViewMore}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;