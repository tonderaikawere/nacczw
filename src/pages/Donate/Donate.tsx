import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Container,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';

interface DonationFormData {
  donationType: string;
  amount: string;
  customAmount: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  otherDonation: string;
  cardNumber: string;
  cardType: string;
}

const Donation: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    donationType: '',
    amount: '',
    customAmount: '',
    donorName: '',
    donorEmail: '',
    donorPhone: '',
    otherDonation: '',
    cardNumber: '',
    cardType: '',
  });

  const handleDonationTypeChange = (event: SelectChangeEvent): void => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      donationType: value,
      amount: '',
      customAmount: '',
    }));
  };

  const handleAmountChange = (value: string): void => {
    if (value === 'other') {
      setFormData((prev) => ({ ...prev, amount: 'other' }));
    } else {
      setFormData((prev) => ({
        ...prev,
        amount: value,
        customAmount: '',
      }));
    }
  };

  const handleInputChange = (field: keyof DonationFormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!formData.donorEmail.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.donorPhone.match(/^\d+$/)) {
      alert('Please enter a valid phone number.');
      return;
    }

    event.currentTarget.action = 'https://formsubmit.co/your-email@example.com';
    event.currentTarget.method = 'POST';
    event.currentTarget.submit();

    alert('Thank you for your donation!');
  };

  return (
    <Container sx={{ padding: { xs: '20px', md: '40px' }, backgroundColor: '#F5F5F5' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#218000', textAlign: 'center' }}>
        Donate to NACC
      </Typography>

      <Typography variant="h6" sx={{ marginBottom: '20px', color: '#218000', textAlign: 'center' }}>
        {'"Give, and it will be given to you..." - Luke 6:38'}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#218000' }}>
          Your Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              value={formData.donorName}
              onChange={(e) => handleInputChange('donorName', e.target.value)}
              name="name"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={formData.donorEmail}
              onChange={(e) => handleInputChange('donorEmail', e.target.value)}
              name="email"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              value={formData.donorPhone}
              onChange={(e) => handleInputChange('donorPhone', e.target.value)}
              name="phone"
              required
            />
          </Grid>
        </Grid>

        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel>Donation Type</InputLabel>
          <Select
            value={formData.donationType}
            onChange={handleDonationTypeChange}
            required
            name="donationType"
            label="Donation Type"
          >
            <MenuItem value="money">Money</MenuItem>
            <MenuItem value="clothes">Clothes</MenuItem>
            <MenuItem value="gadgets">Gadgets</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        {formData.donationType === 'money' && (
          <>
            <Typography variant="h6" sx={{ marginTop: '20px', color: '#218000' }}>
              Amount
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  fullWidth
                  variant={formData.amount === '5' ? 'contained' : 'outlined'}
                  onClick={() => handleAmountChange('5')}
                >
                  $5
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  fullWidth
                  variant={formData.amount === '25' ? 'contained' : 'outlined'}
                  onClick={() => handleAmountChange('25')}
                >
                  $25
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  fullWidth
                  variant={formData.amount === '50' ? 'contained' : 'outlined'}
                  onClick={() => handleAmountChange('50')}
                >
                  $50
                </Button>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Button
                  fullWidth
                  variant={formData.amount === '100' ? 'contained' : 'outlined'}
                  onClick={() => handleAmountChange('100')}
                >
                  $100
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Other Amount"
                  type="number"
                  value={formData.amount === 'other' ? formData.customAmount : ''}
                  onChange={(e) => handleInputChange('customAmount', e.target.value)}
                  name="customAmount"
                  required={formData.amount === 'other'}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ marginTop: '20px', color: '#218000' }}>
              Card Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Card Type"
                  value={formData.cardType}
                  onChange={(e) => handleInputChange('cardType', e.target.value)}
                  name="cardType"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  name="cardNumber"
                  required
                />
              </Grid>
            </Grid>
          </>
        )}

        {formData.donationType === 'clothes' && (
          <Typography variant="body1" sx={{ marginTop: '20px', color: '#218000' }}>
            Please specify the type and quantity of clothes you are donating:
            <TextField
              fullWidth
              multiline
              rows={4}
              value={formData.otherDonation}
              onChange={(e) => handleInputChange('otherDonation', e.target.value)}
              name="otherDonation"
              sx={{ marginTop: '10px' }}
            />
          </Typography>
        )}

        {formData.donationType === 'gadgets' && (
          <Typography variant="body1" sx={{ marginTop: '20px', color: '#218000' }}>
            Please specify the type and quantity of gadgets you are donating:
            <TextField
              fullWidth
              multiline
              rows={4}
              value={formData.otherDonation}
              onChange={(e) => handleInputChange('otherDonation', e.target.value)}
              name="otherDonation"
              sx={{ marginTop: '10px' }}
            />
          </Typography>
        )}

        {formData.donationType === 'other' && (
          <Typography variant="body1" sx={{ marginTop: '20px', color: '#218000' }}>
            Please specify the type of donation and details:
            <TextField
              fullWidth
              multiline
              rows={4}
              value={formData.otherDonation}
              onChange={(e) => handleInputChange('otherDonation', e.target.value)}
              name="otherDonation"
              sx={{ marginTop: '10px' }}
            />
          </Typography>
        )}

        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#218000' }}>
            Donate Now
          </Button>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ marginTop: '40px', color: '#218000', textAlign: 'center' }}>
        Thank you for your generosity!
      </Typography>
    </Container>
  );
};

export default Donation;
