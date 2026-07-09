import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const InfoSectionPage: React.FC = () => {
  return (
    <Container sx={{ padding: { xs: '10px', md: '20px' }, backgroundColor: '#F5F5F5' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: '20px',
        }}
      >
        {/* Top Left: Vision */}
        <Box
          sx={{
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: '10px', color: '#218000' }}>
            Vision
          </Typography>
          <Typography variant="body1">
            At the National Apostolic Church of Christ (NACC), our vision is to be a leading force in spiritual transformation and community development. We aim to inspire and empower individuals to live out their faith through active engagement in worship, community service, and personal growth.
            <br /><br />
            We envision a vibrant and inclusive community where every individual finds purpose, strength, and hope in their spiritual journey. Our goal is to create a network of thriving churches and programs that support and uplift people from all walks of life, fostering a deep sense of connection and shared faith.
            <br /><br />
            By focusing on spiritual growth, community outreach, and the nurturing of future leaders, we aspire to build a legacy of faith and service that impacts generations to come.
          </Typography>
        </Box>

        {/* Top Right: Mission */}
        <Box
          sx={{
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: '10px', color: '#218000' }}>
            Mission
          </Typography>
          <Typography variant="body1">
            Our mission at NACC is to spread the message of Christ and enhance spiritual growth through engaging worship services, impactful community programs, and compassionate support. We are dedicated to fostering a Christ-centered community where individuals can deepen their faith, find purpose, and contribute positively to society.
            <br /><br />
            We are committed to reaching out to those in need, providing support and resources to improve lives, and creating opportunities for personal and communal development. Our mission involves a holistic approach to spiritual and community well-being, ensuring that our programs and services are accessible and impactful.
            <br /><br />
            Through our outreach efforts, educational programs, and worship services, we strive to build a supportive and loving community that exemplifies the teachings of Christ and embraces the diversity of our members.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {/* Bottom Left: Goals */}
        <Box
          sx={{
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: '10px', color: '#218000' }}>
            Goals
          </Typography>
          <Typography variant="body1">
            Our goals at NACC are designed to guide our efforts and measure our success in fulfilling our vision and mission. Key goals include:
            <br /><br />
            <ul>
              <li><strong>Strengthen Faith:</strong> Enhance the spiritual growth of our members through dynamic worship services, engaging Bible studies, and personal mentorship.</li>
              <li><strong>Expand Outreach:</strong> Increase our outreach efforts to reach more individuals and communities, providing support, resources, and spiritual guidance to those in need.</li>
              <li><strong>Build Community:</strong> Foster a sense of community and belonging through various programs, events, and support networks that connect individuals and families.</li>
              <li><strong>Develop Leaders:</strong> Identify and cultivate future leaders within our congregation to take on roles of responsibility and contribute to the growth of our church.</li>
              <li><strong>Improve Accessibility:</strong> Ensure that our programs and services are accessible to all, including those who may face physical, financial, or other barriers.</li>
            </ul>
            <br />
            Specific targets for the coming year include:
            <br />
            <ul>
              <li>Launch three new community outreach programs to address specific local needs.</li>
              <li>Increase church attendance by 15% through targeted community engagement and outreach initiatives.</li>
              <li>Develop and implement a leadership training program for emerging church leaders.</li>
              <li>Expand our educational offerings by introducing new Bible study groups and workshops.</li>
              <li>Enhance accessibility by improving facilities and providing additional support services.</li>
            </ul>
          </Typography>
        </Box>

        {/* Bottom Right: Values */}
        <Box
          sx={{
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            sx={{
              backgroundImage: 'url(/images/img3.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              height: '250px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          />
          <Typography variant="h4" sx={{ marginBottom: '10px', color: '#218000' }}>
            Values
          </Typography>
          <Typography variant="body1">
            Our values at NACC form the foundation of our operations and interactions. They reflect our commitment to serving God and our community with integrity and compassion:
            <br /><br />
            <ul>
              <li><strong>Faith:</strong> We place our trust in God and strive to live according to His teachings, encouraging others to grow in their faith.</li>
              <li><strong>Compassion:</strong> We show love and kindness to all, offering support and assistance to those in need and responding to the challenges of our community.</li>
              <li><strong>Integrity:</strong> We conduct our affairs with honesty and transparency, maintaining the highest ethical standards in all our dealings.</li>
              <li><strong>Inclusivity:</strong> We welcome and embrace individuals from all backgrounds, fostering an environment where everyone feels valued and accepted.</li>
              <li><strong>Service:</strong> We are committed to serving others, both within our church and the wider community, through active engagement and outreach.</li>
              <li><strong>Excellence:</strong> We strive for excellence in all that we do, seeking to honor God through our dedication, quality, and commitment to our mission and goals.</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default InfoSectionPage;