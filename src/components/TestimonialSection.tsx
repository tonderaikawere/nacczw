import React from 'react';
import { Box, Typography, Container, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    title: "“A Church Feels Like Family”",
    quote: "Joining this church has been a huge blessing in my life. The worship services are inspiring, and the messages always speak directly to my heart.",
    author: "ANTHONY CLARKE",
    role: "Active Member",
    rating: 5
  },
  {
    title: "“A COMMUNITY TRULY CARES”",
    quote: "I found hope, genuine connections, and opportunities to serve. The fellowship groups have really helped me grow in faith.",
    author: "SARAH JOHNSON",
    role: "Community Volunteer",
    rating: 5
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: '#ffffff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Testimonials
          </Typography>
          <Typography variant="h2" sx={{ mb: 4 }}>
            WHAT OUR COMMUNITY SAYS ABOUT US
          </Typography>
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          style={{ paddingBottom: '40px' }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <Box sx={{ textAlign: 'center', px: { xs: 2, md: 6 } }}>
                <Rating value={t.rating} readOnly sx={{ color: 'secondary.main', mb: 3 }} />
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontStyle: 'italic', fontSize: '1.5rem' }}>{t.title}</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>{t.quote}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'primary.main' }}>{t.author}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{t.role}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
