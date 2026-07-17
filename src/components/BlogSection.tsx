import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const events = [
  { title: "Pastors Training Summit", date: "Aug 15, 2024", summary: "A comprehensive training session for pastors." },
  { title: "Visit to Felabusi Village", date: "Jul 20, 2024", summary: "We visited Felabusi Village to donate supplies." },
];

const BlogSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Latest Updates</Typography>
      <Box>
        {events.map((event, index) => (
          <Box key={index}>
            <Typography variant="caption">{event.date}</Typography>
            <Typography variant="h5">{event.title}</Typography>
            <Typography variant="body2">{event.summary}</Typography>
          </Box>
        ))}
      </Box>
      <Link to="/blog"><Button>View All News</Button></Link>
    </Box>
  );
};

export default BlogSection;
