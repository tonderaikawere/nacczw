import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const sermonsList = [
  { title: "Walking by Faith Every Day", speaker: "John Doe", date: "Aug 15, 2024", img: "/images/img5.png" },
  { title: "Growing Strong in Your Faith", speaker: "Michael Anderson", date: "Jul 20, 2024", img: "/images/img6.png" },
  { title: "Hearing God's Voice Clearly", speaker: "David Williams", date: "May 04, 2024", img: "/images/img7.png" }
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 12, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Featured Sermons
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
              LISTEN TO OUR INSPIRING SERMONS TODAY
            </Typography>
          </Box>
          <Button variant="contained" onClick={() => navigate('/blog')}>View All Sermons</Button>
        </Box>
        <Grid container spacing={4}>
          {sermonsList.map((s, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ border: '1px solid #E2E8F0', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia component="img" height="230" image={s.img} alt={s.title} />
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>DISCIPLESHIP</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: '1.3rem' }}>{s.title}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary', fontSize: '0.85rem', mt: 'auto', pt: 2, borderTop: '1px solid #E2E8F0' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>By: {s.speaker}</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>{s.date}</Typography>
                  </Box>
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
