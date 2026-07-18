import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import ContactSection from '../../components/ContactSection';
import InformationSection from '../../components/InformationSection';
import Footer from '../../components/Footer';

const allPosts = [
  { title: "Pastors Training Summit in Mutare", tag: "Training", speaker: "Bishop M. Khumalo", date: "Aug 15, 2024", body: "Our leadership training program aims to empower local emerging church leaders with tools for conflict resolution, sermon planning, and church organization management." },
  { title: "Visit to Felabusi Village", tag: "Outreach", speaker: "Rev. Dr. J. Moyo", date: "Jul 20, 2024", body: "We conducted a local agricultural training session and donated cattle medicine to farmers in Felabusi Village, Mutare, supporting food security and livestock health." },
  { title: "Annual Zion Fellowship Conference", tag: "Fellowship", speaker: "Apostle E. Ncube", date: "Sep 05, 2024", body: "Gathering representatives from independent Zionist congregations across Zimbabwe to promote ecumenical collaboration, praise, and prayer partnerships." },
  { title: "Youth Empowerment Seminar", tag: "Youth", speaker: "Sister P. Dube", date: "Oct 12, 2024", body: "Equipping young christian leaders with skills in entrepreneurship, local trades, and spiritual discipleship workshops." }
];

const Blog: React.FC = () => {
  return (
    <Box sx={{ pt: '80px' }}>
      <Box sx={{ py: 8, backgroundColor: '#0F172A', color: '#ffffff', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>
          Blog & News
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
          {["All", "Outreach", "Training", "Fellowship"].map((cat) => (
            <Button key={cat} variant="outlined" color="primary" sx={{ borderRadius: 1 }}>
              {cat}
            </Button>
          ))}
        </Box>
        <Grid container spacing={4}>
          {allPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ border: '1px solid #E2E8F0', boxShadow: 'none', borderRadius: '8px', borderLeft: '4px solid #218000', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800 }}>{post.tag}</Typography>
                    <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: '1.5rem' }}>{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{post.body}</Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 'auto', fontWeight: 600, color: 'primary.main' }}>Speaker: {post.speaker}</Typography>
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
