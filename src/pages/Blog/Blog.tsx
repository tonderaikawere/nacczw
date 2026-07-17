import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const posts = [
  { title: "Pastors Training Summit", date: "Aug 15, 2024", body: "Our leadership training program aims to empower local emerging church leaders with tools for conflict resolution and sermon planning." },
  { title: "Visit to Felabusi Village", date: "Jul 20, 2024", body: "We conducted a local agricultural training session and donated cattle medicine to farmers in Felabusi Village, Mutare." }
];

const Blog: React.FC = () => {
  return (
    <Box sx={{ pt: '64px' }}>
      <Box sx={{ py: 12, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}>
          Blog & News
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '12px' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="caption" color="secondary" sx={{ fontWeight: 700 }}>{post.date}</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>{post.title}</Typography>
                  <Typography variant="body1" color="text.secondary">{post.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ContactSection />
      <InformationSection />
      <Footer />
    </Box>
  );
};

export default Blog;
