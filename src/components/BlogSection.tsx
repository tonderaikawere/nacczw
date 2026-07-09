import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

interface BlogEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  imageUrl: string;
  link: string;
}

const events: BlogEvent[] = [
  {
    title: "Pastors Training",
    date: "August 15, 2024",
    time: "10:00 AM",
    location: "NACC Church Hall",
    summary: `A comprehensive training session for pastors to enhance their leadership and spiritual guidance skills. This event 
      provided pastors with the opportunity to deepen their knowledge and capabilities in managing their congregations. In addition to 
      covering fundamental topics like sermon preparation and church management, the training focused on critical areas such as conflict 
      resolution, emotional support, and spiritual leadership. With real-world case studies, the pastors engaged in interactive discussions 
      about the challenges they face in their communities and learned how to address them with compassion and grace. The event also served as 
      a platform for networking, with pastors from different regions sharing best practices and forming lifelong partnerships. The feedback 
      from participants was overwhelmingly positive, with many expressing how empowered they felt to return to their churches with renewed 
      energy and purpose.`,
    imageUrl: "/images/img3.png",
    link: "/blog"
  },
  {
    title: "Visit to Felabusi Village",
    date: "July 20, 2024",
    time: "8:00 AM",
    location: "Felabusi Village",
    summary: `We visited Felabusi Village to donate food supplies and cattle medicine, spreading the love and kindness of Christ. The visit 
      aimed to alleviate the struggles faced by this rural community due to the ongoing drought and the lack of access to veterinary services 
      for their livestock. Our team provided not only material aid but also educational workshops on sustainable farming techniques and the 
      importance of community-led initiatives in securing their future food supply. The village elders expressed their gratitude, emphasizing 
      how this visit reminded them of the importance of unity and faith during tough times. The day concluded with a special prayer service 
      where villagers and NACC members gathered to pray for rain and blessings upon the village.`,
    imageUrl: "/images/img3.png",
    link: "/blog"
  },
];

const BlogSection: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ padding: {xs:'20px', md:'20px 50px'} }}>
      <Typography variant="h3" sx={{ textAlign: 'left', marginBottom: '20px' }}>
        Our Latest Events and Projects
      </Typography>

      {events.map((event, index) => (
        <Card key={index} sx={{ 
          display: 'flex', 
          flexDirection: isSmallScreen ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
          marginBottom: '30px', 
          gap: '20px' 
        }}>
          <CardMedia
            component="img"
            sx={{ width: isSmallScreen ? '100%' : '40%' }}
            image={event.imageUrl}
            alt={event.title}
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', padding: '20px' }}>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>{event.title}</Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>{`${event.date} | ${event.time} | ${event.location}`}</Typography>
            <Typography variant="body2" sx={{ marginBottom: '20px' }}>{event.summary}</Typography>
            <Button component={Link} to={event.link} variant="contained" sx={{ backgroundColor: '#218000' }}>Contact Us</Button>
          </CardContent>
        </Card>
      ))}

      <Box sx={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
      <Button component={Link} to="/blog" variant="contained" sx={{ marginTop: '20px', color: '#fff', backgroundColor: '#218000' }}>
        View All Blogs
      </Button>
      </Box>

    </Box>
  );
};

export default BlogSection;
