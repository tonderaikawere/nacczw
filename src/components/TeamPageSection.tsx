import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface SocialMedia {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  experience: string;
  yearJoined: string;
  socialMedia: SocialMedia;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Prosper Khumalo',
    title: 'Founder & Community Leader',
    image: '/images/wallas.png',
    description: `Wallas is dedicated to fostering community engagement and spiritual growth. With a vision to create a nurturing environment, he leads various outreach programs that empower individuals and families. His passion for service drives him to connect with people at every level, ensuring that NACC's mission resonates throughout the community. Wallas is committed to bringing together diverse groups, promoting inclusivity, and enhancing the overall well-being of those he serves.`,
    experience: '5 years',
    yearJoined: '2019',
    socialMedia: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    name: 'Bongi Dube',
    title: 'Programs Coordinator',
    image: '/images/pretty.png',
    description: `Vongai manages NACC's educational programs and community events, ensuring that each initiative aligns with our mission of spiritual enrichment and community support. She is passionate about creating impactful learning experiences for all ages. With her keen organizational skills, Vongai cultivates partnerships with local organizations and stakeholders to broaden the reach of our programs, making education accessible and relevant to community needs. Her ability to inspire others fosters a culture of growth and collaboration.`,
    experience: '5 years',
    yearJoined: '2019',
    socialMedia: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    name: 'Brian Moyo',
    title: 'Youth Engagement Officer',
    image: '/images/wallen.png',
    description: 'Wallen focuses on youth programs, promoting leadership and personal development through engaging activities and mentorship opportunities. He believes in empowering young people to become proactive members of their communities. By organizing workshops, retreats, and community service projects, Wallen inspires youth to develop their skills and passions while fostering a sense of responsibility and service to others. His energetic approach and genuine care for the youth help cultivate a supportive environment for growth.',
    experience: '5 years',
    yearJoined: '2019',
    socialMedia: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    name: 'Mbaba Nxumalo',
    title: 'Community Outreach Specialist',
    image: '/images/team.png',
    description: `Saidi works closely with local communities to identify needs and develop outreach initiatives. His focus on building strong relationships with community members helps NACC enhance its support and resources for those in need. Saidi's commitment to understanding the unique challenges faced by individuals allows him to tailor programs that effectively address these issues. Through his efforts, he promotes a spirit of cooperation and mutual aid, helping to uplift the community as a whole.`,
    experience: '5 years',
    yearJoined: '2019',
    socialMedia: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    }
  },
  // Add other team members here...
];

const TeamPageSection: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f9f9f9' }}>
      {/* Heading and Paragraph */}
      <Box sx={{ marginBottom: '40px', textAlign: 'left' }}>
        <Typography variant="h4" sx={{ color: '#218000', marginBottom: '10px' }}>
          Meet the Amazing Team
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          Join us at NACC, where we strive to uplift and support our community through love, compassion, and meaningful engagement. Together, we can make a difference.
        </Typography>
      </Box>

      {/* Team Cards */}
      {teamMembers.map((member, index) => (
        <Card
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
            alignItems: 'center',
            gap: '5%',
            width: '100%',
            marginBottom: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            borderRadius: '8px',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            image={member.image}
            alt={member.name}
            sx={{
              border: '5px solid #218000',
              width: { xs: '100%', md: '30%' },
              height: { xs: '350px', md: 'auto' },
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          {/* Content Section */}
          <CardContent
            sx={{
              flex: 1,
              padding: '20px',
              textAlign: { xs: 'center', md: index % 2 === 0 ? 'left' : 'right' },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#101010' }}>
              {member.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#218000', marginBottom: '10px' }}>
              {member.title}
            </Typography>
            <Divider sx={{ borderStyle: 'dotted', borderColor: '#218000', marginY: '10px' }} />
            <Typography variant="body1" sx={{ color: '#666' }}>
              {member.description}
            </Typography>
            <Typography variant="body2" sx={{ color: '#999', marginTop: '10px' }}>
              Experience: {member.experience}
            </Typography>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Year Joined: {member.yearJoined}
            </Typography>
            <Box sx={{ marginTop: '10px' }}>
              {member.socialMedia.facebook && (
                <IconButton
                  component="a"
                  href={member.socialMedia.facebook}
                  target="_blank"
                  sx={{ color: '#3b5998', marginRight: '8px' }}
                >
                  <FacebookIcon />
                </IconButton>
              )}
              {member.socialMedia.twitter && (
                <IconButton
                  component="a"
                  href={member.socialMedia.twitter}
                  target="_blank"
                  sx={{ color: '#1DA1F2', marginRight: '8px' }}
                >
                  <TwitterIcon />
                </IconButton>
              )}
              {member.socialMedia.linkedin && (
                <IconButton
                  component="a"
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  sx={{ color: '#0077B5' }}
                >
                  <LinkedInIcon />
                </IconButton>
              )}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TeamPageSection;