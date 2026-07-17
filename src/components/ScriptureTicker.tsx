import React from 'react';
import { Box } from '@mui/material';
import CrossIcon from '@mui/icons-material/Add';

const ScriptureTicker: React.FC = () => {
  const items = [
    "THE LORD IS MY SHEPHERD, I SHALL NOT WANT.",
    "I CAN DO ALL THINGS THROUGH CHRIST WHO STRENGTHENS ME.",
    "THE LORD IS MY LIGHT AND MY SALVATION.",
    "TRUST IN THE LORD WITH ALL YOUR HEART."
  ];

  return (
    <Box sx={{ backgroundColor: '#0F172A', color: '#FFFFFF', py: 3, borderBottom: '2px solid #E5A900', overflow: 'hidden' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="marquee-item">
              <span style={{ marginRight: '24px' }}>{text}</span>
              <CrossIcon sx={{ color: 'secondary.main', fontSize: '24px' }} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ScriptureTicker;
