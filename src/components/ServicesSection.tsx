import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1, title: 'Morning Prayer', time: '6:00 AM' },
  { id: 2, title: 'Prayer Groups', time: 'Wednesdays 7:00 PM' },
  { id: 3, title: 'Sunday Services', time: '9:00 AM & 11:00 AM' },
  { id: 4, title: 'Marriage Counseling', time: 'By Appointment' },
  { id: 5, title: 'Community Outreach', time: 'Saturdays 10:00 AM' },
  { id: 6, title: 'Bible Study', time: 'Fridays 7:00 PM' },
  { id: 7, title: 'Youth Programs', time: 'Sundays 3:00 PM' },
  { id: 8, title: 'Baptisms', time: 'Sundays 3:00 PM' },
];

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({ email: '', phone: '', name: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h3">Services</Typography>
      <Typography variant="body1">Join us to enrich your spiritual journey.</Typography>
      <Box>
        {services.map((service) => (
          <Box key={service.id}>
            <Typography variant="h5">{service.title}</Typography>
            <Typography variant="caption">{service.time}</Typography>
          </Box>
        ))}
      </Box>
      <Button onClick={() => navigate('/services')}>View All Services</Button>
      <Button onClick={() => setOpen(true)}>Request Counseling</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Request Counseling / Prayers</DialogTitle>
        <DialogContent>
          <TextField name="name" label="Your Name" fullWidth value={formDetails.name} onChange={handleInputChange} />
          <TextField name="email" label="Email" fullWidth value={formDetails.email} onChange={handleInputChange} />
          <TextField name="phone" label="Phone" fullWidth value={formDetails.phone} onChange={handleInputChange} />
          <TextField name="message" label="Message" multiline rows={3} fullWidth value={formDetails.message} onChange={handleInputChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => { alert('Request sent successfully!'); setOpen(false); }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServicesSection;
