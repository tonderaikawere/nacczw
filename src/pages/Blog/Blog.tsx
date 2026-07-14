import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Footer from '../../components/Footer';

interface BlogEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  fullDescription: string;
  imageUrl: string;
}

const events: BlogEvent[] = [
    {
      title: "Pastors Training",
      date: "August 15, 2024",
      time: "10:00 AM",
      location: "NACC Church Hall",
      fullDescription: `A comprehensive training session for pastors to enhance their leadership and spiritual guidance skills. This training covered 
        various topics including sermon preparation, church management, and pastoral care. The pastors were equipped with the tools to lead 
        congregations effectively, focusing on spiritual growth, church administration, and community engagement. In addition to theoretical 
        lessons, practical exercises allowed the pastors to practice delivering sermons and offering counseling. The session also highlighted 
        the importance of servant leadership, emphasizing humility, compassion, and service to others as core values for any church leader. 
        At the end of the session, the pastors participated in a roundtable discussion to share their experiences and challenges, fostering a 
        sense of brotherhood and mentorship that will extend beyond this training. As a follow-up, NACC will offer quarterly check-ins with 
        the pastors to track their progress and provide ongoing support. This training marked the beginning of a new chapter for many leaders 
        who left feeling empowered and recharged in their calling to serve.`,
      imageUrl: "/images/img3.png"
    },
    {
      title: "Visit to Felabusi Village",
      date: "July 20, 2024",
      time: "8:00 AM",
      location: "Felabusi Village",
      fullDescription: `We visited Felabusi Village to donate food supplies and cattle medicine, helping the local community during a period 
        of drought and livestock disease outbreaks. Our visit was part of NACC's broader initiative to support rural communities in times of
        crisis, focusing on both immediate aid and long-term sustainability. Alongside the donations, we organized educational sessions for 
        the villagers, teaching them about the importance of maintaining cattle health and crop management. A team of veterinarians from 
        neighboring towns volunteered their services to assist with vaccinations and treatments for the livestock. The interaction with 
        the villagers was heartwarming as we learned about their daily lives and the unique challenges they face. Through heartfelt conversations, 
        we heard stories of resilience and perseverance, reinforcing our commitment to be there for them in future endeavors. Before departing, 
        the NACC team participated in a prayer service with the villagers, asking for blessings upon their land and livestock. This visit not only 
        provided material aid but also spiritual encouragement, reinforcing the bonds between the church and the community.`,
      imageUrl: "/images/img3.png"
    },
    {
      title: "Skills Training Workshop",
      date: "June 5, 2024",
      time: "9:00 AM",
      location: "NACC Training Center",
      fullDescription: `This workshop aimed to equip individuals with practical skills that they could immediately use for employment 
        opportunities or entrepreneurial ventures. Over 100 participants attended, learning trades such as hairdressing, cooking, till 
        operating, and basic tailoring. The training included a series of interactive sessions where participants could practice their skills 
        under the guidance of seasoned professionals. Beyond just technical skills, the workshop also featured lessons on how to market 
        these skills in the local economy, with emphasis on customer service, personal branding, and financial management. Local business 
        leaders were invited to offer mentorship and even job opportunities to some of the best-performing participants. By the end of the 
        workshop, several participants had formed small groups, planning to start businesses together and apply for microloans facilitated by NACC. 
        Many left the workshop with not only new skills but also the confidence to venture into the business world, creating a ripple effect of 
        economic empowerment in their communities. One of the workshop's highlights was the testimony of a participant who, after just a week, 
        managed to secure a job as a cook in a local restaurant, demonstrating the immediate impact of this initiative.`,
      imageUrl: "/images/img3.png"
    },
    {
      title: "Baptism and Crusade in Gwanda",
      date: "May 25, 2024",
      time: "11:00 AM",
      location: "Gwanda",
      fullDescription: `A powerful two-day crusade in Gwanda, marked by heartfelt worship, spiritual healing, and community bonding. The 
        crusade drew hundreds of people from surrounding villages, many of whom came forward for prayer, healing, and baptism. The event 
        featured guest pastors who led inspiring sermons on faith, repentance, and the importance of community in the Christian journey. 
        Attendees were deeply moved by the personal testimonies shared, where individuals recounted their experiences of transformation and 
        healing after embracing their faith. The baptisms were a particularly poignant part of the event, with over 50 individuals publicly 
        declaring their faith and commitment to the Christian path. NACC volunteers also engaged with the crowd, providing counseling and 
        spiritual guidance for those seeking support in their spiritual lives. The atmosphere was filled with joy, as worship songs and 
        prayers echoed through the open fields. Many people expressed how the crusade had revitalized their faith and brought a new sense 
        of unity to the community. The event concluded with a shared meal provided by NACC, reinforcing the spirit of fellowship that defined 
        the entire crusade.`,
      imageUrl: "/images/img3.png"
    }
  ];
  

const Blog: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box>
        <Box
      sx={{
        position: 'relative',
        height: {xs:'100vh', md:'60vh'},
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* Swiper container for background images */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 5000, // Adjust delay as needed
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade" // Fading effect between slides
        modules={[Autoplay]}
        className="heroSwiper"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        
      </Swiper>

      {/* Text content */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
          Our Blog
        </Typography>
        
      </Box>

      <Box
        component="img"
        src="/images/logo.png"
        alt="NACC"
        sx={{ position: 'absolute', bottom: '20px', width: '40px', height: '40px' }}
      />
    </Box>
        <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" sx={{ textAlign: 'left', marginBottom: '20px' }}>
        All Events and Projects
      </Typography>

      {events.map((event, index) => (
  <Card key={index} sx={{ 
    marginBottom: '30px', 
    display: 'flex', 
    flexDirection: isSmallScreen ? 'column' : 'row',
    gap: '20px' // Equal spacing between image and text
  }}>
    <CardMedia
      component="img"
      sx={{ height: '300px', width: isSmallScreen ? '100%' : '40%' }}
      image={event.imageUrl}
      alt={event.title}
    />
    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px', padding: '20px' }}>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>{event.title}</Typography>
      <Typography variant="body1" sx={{ marginBottom: '10px' }}>{`${event.date} | ${event.time} | ${event.location}`}</Typography>
      <Typography 
        variant="body2"
        sx={{ 
          minHeight: '6em', // Approximately 5 lines of text
          maxHeight: '24em', // Approximately 20 lines of text
          overflow: 'auto', 
          textOverflow: 'ellipsis' 
        }}
      >
        {event.fullDescription}
      </Typography>
    </CardContent>
  </Card>
))}

    </Box>
    <Footer/>
    </Box>
  );
};

export default Blog;
