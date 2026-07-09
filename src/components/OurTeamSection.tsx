import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  summary: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prosper Khumalo',
    title: 'Founder & Lead Pastor',
    image: '/images/wallas.png',
    summary: 'An inspiring leader dedicated to nurturing spiritual growth within the community through outreach and worship.',
  },
  {
    name: 'Ndumiso Nxumalo',
    title: 'Worship Leader',
    image: '/images/wallen.png',
    summary: 'Passionate about creating a vibrant worship atmosphere, fostering a connection between the congregation and God.',
  },
  {
    name: 'Brian Moyo',
    title: 'Community Outreach Coordinator',
    image: '/images/pretty.png',
    summary: 'Focused on building relationships and coordinating initiatives to serve those in need within our community.',
  },
  {
    name: 'Bongi Bhebhe',
    title: 'Youth Pastor',
    image: '/images/team.png',
    summary: 'Engaging with the youth to guide them in their faith journeys and provide mentorship and support.',
  },
];

const OurTeamSection: React.FC = () => {
  const navigate = useNavigate();

  const handleTeamPage = (): void => {
    navigate('/team'); // Navigate to the team page
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      {/* Section Heading */}
      <Typography variant="h4" sx={{ color: '#101010', marginBottom: '10px', fontWeight: '700' }}>
        Our Team
      </Typography>

      {/* Subtext */}
      <Typography variant="body1" sx={{ marginBottom: '40px', color: '#666' }}>
        Meet the Amazing Team at NACC
      </Typography>

      {/* Team Cards - horizontally scrollable for mobile */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, marginBottom: '40px' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 1,
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              sx={{
                minWidth: '85%',
                maxWidth: 300,
                flexShrink: 0,
                scrollSnapAlign: 'center',
                position: 'relative',
                boxShadow: 'none',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              {/* Image Section */}
              <Box sx={{ position: 'relative', overflow: 'hidden', '&:hover .summary': { bottom: 0 } }}>
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={member.name}
                  sx={{ height: '250px', objectFit: 'cover', objectPosition: 'top', transition: 'all 0.3s ease-in-out' }}
                />

                {/* Hover Summary */}
                <Box
                  className="summary"
                  sx={{
                    position: 'absolute',
                    bottom: '-100%', // Initially off-screen
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: '#fff',
                    padding: '20px',
                    textAlign: 'center',
                    transition: 'bottom 0.3s ease-in-out',
                  }}
                >
                  {member.summary}
                </Box>
              </Box>

              {/* Name and Title */}
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {member.title}
                </Typography>
              </CardContent>
              </Card>
          ))}
        </Box>
      </Box>

      {/* Team Cards - Grid for Desktop */}
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: '1fr 1fr 1fr 1fr', // 4 columns on larger screens
          gap: '20px',
        }}
      >
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            sx={{
              position: 'relative',
              boxShadow: 'none',
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            {/* Image Section */}
            <Box sx={{ position: 'relative', overflow: 'hidden', '&:hover .summary': { bottom: 0 } }}>
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{ height: '250px', objectFit: 'cover', objectPosition: 'top', transition: 'all 0.3s ease-in-out' }}
              />

              {/* Hover Summary */}
              <Box
                className="summary"
                sx={{
                  position: 'absolute',
                  bottom: '-100%', // Initially off-screen
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'bottom 0.3s ease-in-out',
                }}
              >
                {member.summary}
              </Box>
            </Box>

            {/* Name and Title */}
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
                {member.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {member.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Button to Navigate to Team Page */}
      <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: '#218000',
            '&:hover': {
              backgroundColor: '#218000',
            },
          }}
          onClick={handleTeamPage}
        >
          View Full Team
        </Button>
      </Box>
    </Box>
  );
};

export default OurTeamSection;
