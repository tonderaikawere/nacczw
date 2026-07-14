import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperRef } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ChurchIcon from '@mui/icons-material/Church';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import OpacityIcon from '@mui/icons-material/Opacity';

interface Service {
  id: number;
  title: string;
  summary: string;
  icon: React.ReactNode;
  time: string;
}

interface ServicesSectionProps {}

const services: Service[] = [
  { id: 1, title: 'Morning Prayer', summary: 'Join us for morning prayer and start your day with God.', icon: <ChurchIcon sx={{ fontSize: 60 }} />, time: '6:00 AM' },
  { id: 2, title: 'Prayer Groups', summary: 'Small prayer groups for deeper connection and support.', icon: <GroupIcon sx={{ fontSize: 60 }} />, time: 'Wednesdays 7:00 PM' },
  { id: 3, title: 'Sunday Services', summary: 'Celebrate God’s love with our Sunday services.', icon: <EventIcon sx={{ fontSize: 60 }} />, time: '9:00 AM & 11:00 AM' },
  { id: 4, title: 'Marriage Counseling', summary: 'Guidance and support for couples in their journey.', icon: <FavoriteIcon sx={{ fontSize: 60 }} />, time: 'By Appointment' },
  { id: 5, title: 'Community Outreach', summary: 'Be a part of our mission to serve the community.', icon: <AccessibilityIcon sx={{ fontSize: 60 }} />, time: 'Saturdays 10:00 AM' },
  { id: 6, title: 'Bible Study', summary: 'Engage in thoughtful discussion and study of scripture.', icon: <BookIcon sx={{ fontSize: 60 }} />, time: 'Fridays 7:00 PM' },
  { id: 7, title: 'Youth Programs', summary: 'Empowering youth to grow in faith and fellowship.', icon: <PeopleIcon sx={{ fontSize: 60 }} />, time: 'Sundays 3:00 PM' },
  { id: 8, title: 'Baptisms', summary: 'Join us to witness the profound and joyous occasion of baptism.', icon: <OpacityIcon sx={{ fontSize: 60, color: 'inherit' }} />, time: 'Sundays 3:00 PM' },
];

const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [open, setOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({ email: '', phone: '', name: '', message: '' });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Request sent successfully!');
    handleClose();
  };

  const handleViewMore = () => {
    navigate('/services');
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9', position: 'relative' }}>
      {/* Heading and Paragraph */}
      <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Services
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '30px' }}>
        Join us to enrich your spiritual journey and strengthen your connection with our community.
      </Typography>

      {/* Carousel for Small Screens and Grid for Medium+ Screens */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          ref={swiperRef}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id}>
              <Card
                onMouseEnter={() => setSelectedService(index)}
                onMouseLeave={() => setSelectedService(null)}
                sx={{
                  position: 'relative',
                  height: '100%',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: selectedService === index ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
                  transition: 'box-shadow 0.3s ease-in-out',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', color: '#218000' }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#000' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', color: '#000' }}>
                    {service.summary}
                  </Typography>
                </CardContent>
                <CardActions sx={{ flexDirection: 'column', alignItems: 'center' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#657C8A',
                      padding: '5px',
                      borderRadius: '5px',
                      marginBottom: '10px',  // Space between the date and button
                    }}
                  >
                    {service.time}
                  </Typography>
                  <Button variant="contained" size="small" sx={{ backgroundColor: '#218000', color:'#fff' }} onClick={handleClickOpen}>
                    Contact Us
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <Button
            variant="outlined"
            sx={{ color: '#218000', borderColor: '#218000' }}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            Prev
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: '#218000', color: '#fff' }}
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            Next
          </Button>
        </Box>
      </Box>

      {/* Grid for Medium and Larger Screens */}
      <Grid container spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={3} key={service.id}>
            <Card
              onMouseEnter={() => setSelectedService(index)}
              onMouseLeave={() => setSelectedService(null)}
              sx={{
                height: '100%',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: selectedService === index ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
                transition: 'box-shadow 0.3s ease-in-out',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', color: '#218000' }}>
                {service.icon}
              </Box>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#000' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', color: '#000' }}>
                  {service.summary}
                </Typography>
              </CardContent>
              <CardActions sx={{ flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#657C8A',
                    padding: '5px',
                    borderRadius: '5px',
                    marginBottom: '10px',  // Space between the date and button
                  }}
                >
                  {service.time}
                </Typography>
                <Button variant="contained" size="small" sx={{ backgroundColor: '#218000', color:'#fff' }} onClick={handleClickOpen}>
                  Contact Us
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Us Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            name="email"
            fullWidth
            value={formDetails.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            name="phone"
            fullWidth
            value={formDetails.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Full Name"
            type="text"
            name="name"
            fullWidth
            value={formDetails.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            name="message"
            fullWidth
            multiline
            rows={3}
            value={formDetails.message}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#218000' }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} sx={{ color: '#218000' }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServicesSection;