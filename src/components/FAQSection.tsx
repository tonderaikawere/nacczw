import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqItems = [
  { question: "What is NACC?", answer: "The National Association of Christian Churches (NACC) is a collective of Christian churches working together to promote fellowship, unity, and support community development initiatives across Zimbabwe." },
  { question: "Where is the NACC headquartered?", answer: "The NACC main headquarters is based in Harare, Zimbabwe, with branches and regional partner organizations operational in multiple cities." },
  { question: "How can my church become a member of NACC?", answer: "Churches can easily request membership information by contacting our administration office, leaving a message on our contact page, or filling out a physical application." },
  { question: "Are there annual membership subscription fees?", answer: "Yes, member churches contribute a nominal annual subscription fee which helps fund pastoral training workshops, administrative overheads, and rural emergency relief." },
  { question: "Does NACC offer certification and licenses to pastors?", answer: "Absolutely. NACC coordinates with national regulatory authorities to certify eligible pastors, register marriage officers, and issue ordination credentials to qualifying leaders." },
  { question: "How does NACC support local community development?", answer: "NACC sponsors agricultural projects, cattle medication distribution, primary healthcare checkups, and youth skills training workshops in remote districts across Zimbabwe." }
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 12, backgroundColor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
            Got Questions?
          </Typography>
          <Typography variant="h3" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 800, mb: 2 }}>
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === 'panel' + index}
              onChange={handleChange('panel' + index)}
              sx={{
                mb: 2,
                border: '1px solid #E2E8F0',
                borderRadius: '12px !important',
                boxShadow: 'none',
                '&:before': { display: 'none' },
                '&.Mui-expanded': {
                  borderColor: 'secondary.main', borderLeft: '4px solid #218000',
                  boxShadow: '0 4px 15px rgba(229, 169, 0, 0.05)',
                }
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}>
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
