import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#218000', // Brand Green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E5A900', // Brand Gold
      contrastText: '#ffffff',
    },
    background: {
      default: '#FDFDFD',
      paper: '#ffffff',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Instrument Sans", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 800,
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
      fontFamily: '"Instrument Sans", sans-serif',
      lineHeight: 1.75,
      fontSize: '1.05rem',
    },
    body2: {
      fontFamily: '"Instrument Sans", sans-serif',
      lineHeight: 1.75,
      fontSize: '0.95rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      fontFamily: '"Poppins", sans-serif',
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Clean rectangle buttons typical of Awaiken Themes
          padding: '12px 32px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 20px rgba(33, 128, 0, 0.15)',
          },
        },
        containedPrimary: {
          backgroundColor: '#218000',
          '&:hover': {
            backgroundColor: '#1b6600',
          },
        },
        containedSecondary: {
          backgroundColor: '#E5A900',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#c99300',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
          border: '1px solid #F1F5F9',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: 8,
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
