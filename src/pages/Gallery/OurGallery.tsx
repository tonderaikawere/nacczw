// src/pages/About/Gallery.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GalleryPageSection from '../../components/GalleryPageSection';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const OurGallery: React.FC = () => {
  return (
    <Box>
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
          Our Gallery
        </Typography>
        
      </Box>

      {/* Down arrow GIF */}
        <Box
          component="img"
          src="/images/logo.png"
          alt="NACC"
          sx={{ position: 'absolute', bottom: '20px', width: '40px', height: '40px' }}
        />
    </Box>
    <Box className='Info'
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'20px',
    padding: { xs: '20px', md: '50px' },
    backgroundColor: '#f9f9f9',
    flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, side by side on larger
  }}
>
  {/* Left Image */}
  <Box
    sx={{
      width: { xs: '100%', md: '25%' }, // Full width on small screens, 50% on medium and up
      display: 'flex',
      justifyContent: 'center', // Center the image
      marginBottom: { xs: '20px', md: '0' }, // Margin bottom on small screens
    }}
  >
    <Box
      component="img"
      src="/images/about1.png" // Replace with your image path
      alt="About Us Large Image"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '100%' },
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for better visual separation
      }}
    />
  </Box>

  {/* Right Side: Two Images Stacked Vertically */}
  <Box
    sx={{
      width: { xs: '100%', md: '25.5%' }, // Full width on small screens, 45% on medium and up
      display:{ xs: 'none', md: 'flex' },
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '20px', // Space between the images
    }}
  >
    <Box
      component="img"
      src="/images/img2.png" // Replace with your first small image
      alt="About Us Image 1"
      sx={{
        width: '100%',
        height: '45%', // Ensure both images have equal height
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for consistency
      }}
    />
    <Box
      component="img"
      src="/images/img3.png" // Replace with your second small image
      alt="About Us Image 2"
      sx={{
        width: '100%',
        height: '45%', // Ensure both images have equal height
        objectFit: 'cover',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for consistency
      }}
    />
  </Box>

  {/* Right Content with Drop Shadow */}
  <Box
    sx={{
      width: { xs: '100%', md: '50%' }, // Full width on small screens, 45% on medium and up
      padding: '20px' ,
      color: '#101010', // Text color set to #101010
      textAlign: 'left',
    }}
  >

    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
      Welcome to Wallasteve Auto & Mechanical Engineering, where we offer top-notch mechanical services to keep your vehicle running smoothly. With years of experience in the auto engineering field, we pride ourselves on delivering exceptional service to both individuals and businesses.
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
      Founded in 2015, Wallasteve has grown into a leading service provider in Bulawayo, Zimbabwe. Our team of certified mechanics specializes in a range of services, including vehicle repairs, routine maintenance, engine diagnostics, and more. Whether you're in need of a quick fix or a comprehensive overhaul, our experts are here to assist you.
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
      At Wallasteve, we use the latest tools and technology to ensure that your vehicle receives the best care. Our commitment to innovation allows us to stay ahead in the fast-evolving auto industry, offering services that range from traditional mechanical work to cutting-edge diagnostics and repairs. 
    </Typography>
    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
      Join the many satisfied clients who trust Wallasteve for all their auto engineering needs. From routine servicing to emergency repairs, we go the extra mile to guarantee quality, reliability, and customer satisfaction. Visit us today and experience the difference!
    </Typography>
  </Box>
</Box>

    <Box>
      <GalleryPageSection/>
      
    <ContactSection/>
      <InformationSection/>
      <Footer/>
    </Box>
    </Box>
  );
};

export default OurGallery;
