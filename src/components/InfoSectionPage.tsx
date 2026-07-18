import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const InfoSectionPage: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', border: '1px solid #E2E8F0', boxShadow: 'none', borderLeft: '4px solid #218000' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>OUR VISION</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Spiritual transformation and holistic community development across indigenous Christian churches, establishing sustainable faith communities built on unity and christ-like leadership.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', border: '1px solid #E2E8F0', boxShadow: 'none', borderLeft: '4px solid #E5A900' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main', mb: 2 }}>OUR MISSION</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                To empower, coordinate, and register member churches, facilitating fellowship networks, biblical teaching, leadership seminars, and agricultural welfare support to drive spiritual and socio-economic transformation in Zimbabwe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoSectionPage;
