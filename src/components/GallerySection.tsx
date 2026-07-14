import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface GallerySectionProps {}

const GallerySection: React.FC<GallerySectionProps> = () => {
  const navigate = useNavigate();

  const images = [
    { src: '/images/img1.png', description: 'Beautiful Landscape' },
    { src: '/images/img2.png', description: 'Stunning Architecture' },
    { src: '/images/img3.png', description: 'Serene Nature' },
    { src: '/images/img4.png', description: 'Vibrant City' },
    { src: '/images/img5.png', description: 'Tranquil Beach' },
    { src: '/images/img6.png', description: 'Majestic Mountains' },
    { src: '/images/img7.png', description: 'Lush Forest' },
    { src: '/images/img8.png', description: 'Charming Village' },
  ];

  const handleViewMore = () => {
    navigate('/gallery'); // Navigates to the Gallery page when clicked
  };

  return (
    <Box
      sx={{
        padding: { xs: '20px', md: '50px' },
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#101010', fontWeight: '700' }}>
        Our Gallery
      </Typography>

      {/* Gallery Grid for larger screens */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                  '&:hover .description': {
                    transform: 'translateY(0)', // Brings the description up on hover
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '10px',
                  }}
                />

                {/* Description on hover */}
                <Box
                  className="description"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background to make text visible
                    color: '#fff',
                    padding: '10px',
                    textAlign: 'center',
                    transform: 'translateY(100%)', // Initially hidden
                    transition: 'transform 0.4s ease', // Smooth transition effect
                  }}
                >
                  <Typography variant="body2">{image.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Horizontally scrollable gallery for small screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 1,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                minWidth: '85%',
                flexShrink: 0,
                textAlign: 'center',
                position: 'relative',
                scrollSnapAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                }}
              />
              <Box
                className="description"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '10px',
                  textAlign: 'center',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <Typography variant="body2">{image.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* View More Button */}
      <Button
        variant="contained"
        sx={{
          marginTop: '20px',
          backgroundColor: '#218000',
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#FF5500' },
        }}
        onClick={handleViewMore}
      >
        View More
      </Button>
    </Box>
  );
};

export default GallerySection;
