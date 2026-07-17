import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqItems = [
  { question: "What is NACC?", answer: "The National Association of Christian Churches is a collective of churches working together." },
  { question: "Where is the NACC headquartered?", answer: "The NACC main headquarters is based in Harare, Zimbabwe." }
];

const FAQSection: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3">Frequently Asked Questions</Typography>
      <Box>
        {faqItems.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
