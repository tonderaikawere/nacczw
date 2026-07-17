import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#218000', // Brand Green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E5A900', // Grace Gold
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFC',
      paper: '#ffffff',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Outfit", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Outfit", sans-serif',
    },
    body1: {
      fontFamily: '"Outfit", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Outfit", sans-serif',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"Outfit", sans-serif',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30, // Pill shaped buttons
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(33, 128, 0, 0.15)',
          },
        },
        containedPrimary: {
          backgroundColor: '#218000',
          '&:hover': {
            backgroundColor: '#1b6600',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
          border: '1px solid #F1F5F9',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #E2E8F0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '8px 0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },
  },
});

export default theme;
