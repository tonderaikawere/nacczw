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
    fontFamily: '"Poppins", "Inter", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Poppins", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Poppins", sans-serif',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      lineHeight: 1.7,
      fontSize: '1.05rem',
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      lineHeight: 1.7,
      fontSize: '0.95rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"Poppins", sans-serif',
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
          padding: '10px 28px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(33, 128, 0, 0.12)',
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
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
          border: '1px solid #E2E8F0',
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
