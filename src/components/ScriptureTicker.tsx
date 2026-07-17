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
    <Box sx={{ backgroundColor: '#0F172A', color: '#FFFFFF', py: 4, borderBottom: '2px solid #E5A900', borderTop: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="marquee-item" style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '32px', fontFamily: '"Poppins", sans-serif', fontWeight: 800 }}>{text}</span>
              <CrossIcon sx={{ color: 'secondary.main', fontSize: '28px', transform: 'rotate(45deg)', mx: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ScriptureTicker;
