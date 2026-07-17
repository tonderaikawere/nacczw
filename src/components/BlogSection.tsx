import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const events = [
  { title: "Pastors Training Summit", tag: "Training", date: "Aug 15, 2024", summary: "A comprehensive training session for pastors to enhance leadership." },
  { title: "Visit to Felabusi Village", tag: "Outreach", date: "Jul 20, 2024", summary: "We visited Felabusi Village to donate food supplies and cattle support." },
];

const BlogSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
              Latest Updates
            </Typography>
            <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
              News & Community Events
            </Typography>
          </Box>
          <Button variant="contained" component={Link} to="/blog">View All News</Button>
        </Box>
        <Grid container spacing={4}>
          {events.map((event, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{event.title}</Typography>
                  <Typography variant="body2">{event.summary}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
