import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the National Association of Christian Churches (NACC)?",
    answer: "The National Association of Christian Churches (NACC) is a collective of Christian churches working together to promote and support community and faith-based initiatives."
  },
  {
    question: "Where is the NACC located?",
    answer: "The NACC is headquartered in [Your Location]. We have member churches and operations across various regions."
  },
  {
    question: "What areas do you operate in?",
    answer: "NACC operates in various regions, including [List of Areas or Regions]. Our aim is to support and strengthen Christian communities throughout these areas."
  },
  {
    question: "What are the main objectives of NACC?",
    answer: "The main objectives of NACC include fostering community engagement, supporting church activities, and promoting Christian values and teachings."
  },
  {
    question: "How can my church become a member of NACC?",
    answer: "To become a member of NACC, your church can apply through our official website or contact our office for more details on the membership process."
  }
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        padding: {xs:'40px 20px', md:'40px 50px'} ,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px',
        justifyContent: 'space-between',
      }}
    >
      {/* Left Side */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          FAQ
        </Typography>
        <Typography variant="h6" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography paragraph>
          We hope this FAQ section helps answer your questions about NACC. If you have any other inquiries or need further assistance, please don't hesitate to contact us. We look forward to serving you and your church community.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link} to="/contact"
          sx={{
            mt: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#218000',
            '&:hover': {
              backgroundColor: '#000A3C',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Right Side - FAQ Items */}
      <Box sx={{ flex: 1}}>
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{ mb: 2, border: '1px solid #ddd', borderRadius: '4px' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;