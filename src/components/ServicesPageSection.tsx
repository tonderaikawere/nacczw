import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { AccessTime, Group, Church, LocalDining, People, Book, Face } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';

interface Service {
  name: string;
  description: string;
  location: string;
  day: string;
  time: string;
  verse: string;
}

interface ServiceIcons {
  [key: string]: React.ReactNode;
}

const serviceIcons: ServiceIcons = {
  'Morning Prayer': <AccessTime sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Prayer Groups': <Group sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Sunday Services': <Church sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Baptisms': <LocalDining sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Marriage Counseling': <People sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Community Outreach': <Face sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Bible Study': <Book sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
  'Youth Programs': <PeopleIcon sx={{ fontSize: { xs: 70, sm: 80, md: 100 }, color: '#218000' }} />, 
};

const services: Service[] = [
  { 
    name: 'Morning Prayer', 
    description: 'Engage in a peaceful and uplifting start to the day with our morning prayer sessions, designed to inspire and refresh your spirit. These sessions offer an intimate environment where we come together as a community to seek guidance and strength for the day ahead.', 
    location: 'Main Hall', 
    day: 'Monday-Friday', 
    time: '6:00 AM - 7:00 AM', 
    verse: 'Psalm 5:3 - "In the morning, Lord, you hear my voice; in the morning I lay my requests before you and wait expectantly."' 
  },
  { 
    name: 'Prayer Groups', 
    description: 'Join one of our small, supportive prayer groups, where we share personal experiences, seek spiritual growth, and pray for one another.', 
    location: 'Room A', 
    day: 'Every Wednesday', 
    time: '5:30 PM - 7:00 PM', 
    verse: 'Matthew 18:20 - "For where two or three gather in my name, there am I with them."' 
  },
  { 
    name: 'Sunday Services', 
    description: 'Be a part of our vibrant Sunday service, a time of worship, teaching, and fellowship. The service is filled with uplifting music and a powerful message.', 
    location: 'Main Sanctuary', 
    day: 'Sunday', 
    time: '9:00 AM - 11:00 AM', 
    verse: 'Psalm 122:1 - "I rejoiced with those who said to me, ‘Let us go to the house of the Lord.’"' 
  },
  { 
    name: 'Baptisms', 
    description: 'Baptism is a profound declaration of faith. Join us as we celebrate new beginnings and welcome individuals into a deeper walk with Christ.', 
    location: 'Outdoor Baptismal Pool', 
    day: 'First Saturday of Every Month', 
    time: '10:00 AM', 
    verse: 'Matthew 28:19 - "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."' 
  },
  { 
    name: 'Marriage Counseling', 
    description: 'Our church offers premarital and marital counseling services to help couples strengthen their relationships through Biblical guidance.', 
    location: 'Counseling Office', 
    day: 'By Appointment', 
    time: 'Flexible', 
    verse: 'Ephesians 4:2-3 - "Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace."' 
  },
  { 
    name: 'Community Outreach', 
    description: 'Be the hands and feet of Christ in our community by participating in our outreach programs, which include feeding the homeless and visiting the sick.', 
    location: 'Varies', 
    day: 'Last Saturday of the Month', 
    time: '8:00 AM - 1:00 PM', 
    verse: 'Proverbs 19:17 - "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done."' 
  },
  { 
    name: 'Bible Study', 
    description: `Dive deeper into God's Word with our weekly Bible study classes, open to everyone, providing in-depth discussions on scripture.`,
    location: 'Fellowship Hall', 
    day: 'Thursday', 
    time: '6:00 PM - 7:30 PM', 
    verse: '2 Timothy 3:16 - "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."' 
  },
  { 
    name: 'Youth Programs', 
    description: 'Our youth programs equip the next generation with Biblical knowledge, leadership skills, and community involvement.', 
    location: 'Youth Center', 
    day: 'Friday', 
    time: '4:00 PM - 6:00 PM', 
    verse: '1 Timothy 4:12 - "Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."' 
  }
];

const ServicesPageSection: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpen = (service: Service): void => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#ffffff' }}>
      <Typography variant="h3" sx={{ textAlign: 'left', marginBottom: '30px' }}>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'left', marginBottom: '30px' }}>
        Join us to enrich your spiritual journey and strengthen your connection with our community.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', md: '45%' },
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '10px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.02)', border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {serviceIcons[service.name]}
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>
              {service.name}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              {service.description}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>
              <strong>Location:</strong> {service.location}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>
              <strong>Day:</strong> {service.day}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>
              <strong>Time:</strong> {service.time}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', marginBottom: '20px' }}>
              "{service.verse}"
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#218000', color: '#fff' }}
              onClick={() => handleOpen(service)}
            >
              Contact Us
            </Button>
          </Box>
        ))}
      </Box>

      {/* Popup Dialog with Contact Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us About {selectedService?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginBottom: '15px' }}>
            Please fill out the form below to get in touch with us.
          </Typography>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Message"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleClose} sx={{ color: '#218000' }}>Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>Submit</Button>
          
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ServicesPageSection;
