import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface GalleryImage {
  id: number;
  image: string;
  alt: string;
}

interface GalleryData {
  WorkSpace: GalleryImage[];
  moments: GalleryImage[];
  Workshops: GalleryImage[];
  HappyClients: GalleryImage[];
  OurTeam: GalleryImage[];
}

const galleryData: GalleryData = {
  WorkSpace: [
    { id: 1, image: '/images/img1.png', alt: 'WorkSpace 1' },
    { id: 2, image: '/images/img2.png', alt: 'WorkSpace 2' },
    { id: 3, image: '/images/img3.png', alt: 'WorkSpace 3' },
    { id: 4, image: '/images/img4.png', alt: 'WorkSpace 4' },
    { id: 5, image: '/images/img5.png', alt: 'WorkSpace 5' },
    { id: 6, image: '/images/img6.png', alt: 'WorkSpace 6' },
  ],
  moments: [
    { id: 1, image: '/images/img5.png', alt: 'moments 1' },
    { id: 2, image: '/images/img6.png', alt: 'moments 2' },
    { id: 3, image: '/images/img2.png', alt: 'moments 3' },
    { id: 4, image: '/images/img7.png', alt: 'moments 4' },
    { id: 5, image: '/images/img8.png', alt: 'moments 5' },
    { id: 6, image: '/images/img1.png', alt: 'moments 6' },
  ],
  Workshops: [
    { id: 1, image: '/images/img7.png', alt: 'Workshops 1' },
    { id: 2, image: '/images/img8.png', alt: 'Workshops 2' },
    { id: 3, image: '/images/img3.png', alt: 'Workshops 3' },
    { id: 4, image: '/images/img6.png', alt: 'Workshops 4' },
    { id: 5, image: '/images/img1.png', alt: 'Workshops 5' },
    { id: 6, image: '/images/img2.png', alt: 'Workshops 6' },
  ],
  HappyClients: [
    { id: 1, image: '/images/img7.png', alt: 'HappyClients 1' },
    { id: 2, image: '/images/img1.png', alt: 'HappyClients 2' },
    { id: 3, image: '/images/img6.png', alt: 'HappyClients 3' },
    { id: 4, image: '/images/img8.png', alt: 'HappyClients 4' },
    { id: 5, image: '/images/img7.png', alt: 'HappyClients 5' },
    { id: 6, image: '/images/img2.png', alt: 'HappyClients 6' },
  ],
  OurTeam: [
    { id: 1, image: '/images/img4.png', alt: 'OurTeam 1' },
    { id: 2, image: '/images/img5.png', alt: 'OurTeam 2' },
    { id: 3, image: '/images/img6.png', alt: 'OurTeam 3' },
    { id: 4, image: '/images/img8.png', alt: 'OurTeam 4' },
    { id: 5, image: '/images/img7.png', alt: 'OurTeam 5' },
    { id: 6, image: '/images/img2.png', alt: 'OurTeam 6' },
  ],
};

const GalleryPageSection: React.FC = () => {
  // Common Swiper settings
  const swiperSettings = {
    slidesPerView: 1, // Default to 1 slide for small screens
    spaceBetween: 10,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
      reverseDirection: false, // Default direction
    },
    pagination: {
      clickable: true,
    },
    loop: true,
    breakpoints: {
      // Small screens: Full-width images (1 slide)
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // Medium screens: 4 images
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    modules: [Autoplay, Pagination],
  };

  // Reusable component for rendering image slides, with an option to reverse direction
  const renderSwiper = (data: GalleryImage[], reverse: boolean = false) => (
    <Swiper
      {...swiperSettings}
      autoplay={{
        ...swiperSettings.autoplay,
        reverseDirection: reverse, // Apply reverse direction if true
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Box
            component="img"
            src={item.image}
            alt={item.alt}
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  // Common Box style for sections
  const sectionStyle = {
    marginBottom: '40px',
    textAlign: 'left', // default alignment
    '@media (min-width: 768px)': { textAlign: 'right' }, // right alignment for headings on larger screens where required
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' } }}>
      {/* Our WorkSpaces Section - Default direction */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#218000', marginBottom: '20px', textAlign: 'left' }}>
          Our Work Spaces
        </Typography>
        {renderSwiper(galleryData.WorkSpace)}
      </Box>

      {/* Moments Section - Reversed direction */}
      <Box sx={sectionStyle}>
        <Typography
          variant="h4"
          sx={{ color: '#218000', marginBottom: '20px', textAlign: { xs: 'left', md: 'right' } }}
        >
          Moments
        </Typography>
        {renderSwiper(galleryData.moments, true)}
      </Box>

      {/* Workshops Section - Default direction */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#218000', marginBottom: '20px', textAlign: 'left' }}>
          Workshops
        </Typography>
        {renderSwiper(galleryData.Workshops)}
      </Box>

      {/* HappyClients Section - Reversed direction */}
      <Box sx={sectionStyle}>
        <Typography
          variant="h4"
          sx={{ color: '#218000', marginBottom: '20px', textAlign: { xs: 'left', md: 'right' } }}
        >
          Happy Clients
        </Typography>
        {renderSwiper(galleryData.HappyClients, true)}
      </Box>

      {/* Our OurTeam Section - Default direction */}
      <Box sx={sectionStyle}>
        <Typography variant="h4" sx={{ color: '#218000', marginBottom: '20px', textAlign: 'left' }}>
          Our Team
        </Typography>
        {renderSwiper(galleryData.OurTeam)}
      </Box>
    </Box>
  );
};

export default GalleryPageSection;
