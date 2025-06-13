/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

// Add third-party dependencies.
import { alpha } from '@mui/material';

/**
 * Create Material-UI global light theme.
 * @param {Object} - Theme options.
 * @returns {Object} Theme.
 */
const defaultTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0066cc',
      light: '#60a5fa',
    },
    secondary: {
      main: '#00d4ff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
      card: 'rgba(26, 26, 26, 0.7)',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
    chip: {
      primary: {
        background: 'rgba(0, 102, 204, 0.2)',
        border: 'rgba(0, 102, 204, 0.3)',
        text: '#60a5fa',
      },
      secondary: {
        background: 'rgba(249, 115, 22, 0.2)',
        border: 'rgba(249, 115, 22, 0.3)',
        text: '#fb923c',
      },
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
      secondary: 'linear-gradient(135deg, #00d4ff 0%, #0066cc 100%)',
      orange: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      green: 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)',
      purple: 'linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%)',
      pink: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h2: ({ theme }) => ({
      fontWeight: 700,
      color: theme.palette.text.primary,
    }),
    h5: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes floatSimple {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes typewriter {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
        }

        @keyframes typewriterSimple {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html, body {
          background: #0a0a0a;
          color: #e0e0e0;
          line-height: 1.6;
          overflow-x: hidden;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 15px rgba(0, 102, 204, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0, 102, 204, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: ({ theme }) => ({
            background: theme.palette.gradients.primary,
            color: '#ffffff',
            boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.3)}`,
            '&:hover': {
              boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
            },
          }),
        },
        {
          props: { variant: 'hover' },
          style: ({ theme }) => ({
            ...theme.mixins.glassEffect,
            color: '#e0e0e0',
            '&:hover': {
              transform: 'translateY(-4px)',
              border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
              backgroundColor: alpha(theme.palette.background.paper, 0.9),
              color: theme.palette.secondary.main,
              boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
            },
          }),
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          textDecoration: 'none',
          '&:hover': {
            color: theme.palette.secondary.main,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -5,
            left: 0,
            width: 0,
            height: 2,
            background: theme.palette.gradients.primary,
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: ({ theme }) => ({
          fontWeight: 700,
          ...theme.mixins.gradientText,
        }),
        h6: ({ theme }) => ({
          fontWeight: 600,
          color: alpha(theme.palette.text.primary, 0.9),
        }),
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: ({ theme }) => ({
            ...theme.mixins.gradientText,
          }),
        },
        {
          props: { variant: 'animated' },
          style: ({ theme }) => ({
            animation: 'fadeIn 0.8s ease forwards',
            opacity: 0,
            transform: 'translateY(30px)',
            color: alpha(theme.palette.text.primary, 0.9),
          }),
        },
        {
          props: { variant: 'sectionTitle' },
          style: ({ theme }) => ({
            ...theme.mixins.sectionTitle,
          }),
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.mixins.glassEffect,
          borderRadius: 12,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }),
      },
      variants: [
        {
          props: { variant: 'hover' },
          style: ({ theme }) => ({
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
            },
          }),
        },
        {
          props: { variant: 'animated' },
          style: ({ theme }) => ({
            animation: 'fadeInUp 0.6s ease forwards',
            opacity: 0,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }),
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.mixins.glassEffect,
          borderRadius: 12,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }),
      },
      variants: [
        {
          props: { variant: 'hover' },
          style: ({ theme }) => ({
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.2)}`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.5)}`,
            },
          }),
        },
        {
          props: { variant: 'animated' },
          style: ({ theme }) => ({
            animation: 'fadeInUp 0.6s ease forwards',
            opacity: 0,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }),
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: { color: 'primary', variant: 'skill' },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
            borderColor: alpha(theme.palette.primary.main, 0.3),
            color: theme.palette.primary.light,
            fontWeight: 500,
            fontSize: '0.875rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.3),
              transform: 'scale(1.05)',
            },
          }),
        },
        {
          props: { color: 'secondary', variant: 'skill' },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.secondary.main, 0.2),
            borderColor: alpha(theme.palette.secondary.main, 0.3),
            color: theme.palette.secondary.main,
            fontWeight: 500,
            fontSize: '0.875rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: alpha(theme.palette.secondary.main, 0.3),
              transform: 'scale(1.05)',
            },
          }),
        },
      ],
    },
    MuiAvatar: {
      variants: [
        {
          props: { variant: 'hover' },
          style: ({ theme }) => ({
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: `0 4px 8px ${alpha(theme.palette.primary.main, 0.3)}`,
            },
          }),
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.mixins.glassEffect,
          background: 'rgba(10, 10, 10, 0.95)',
          boxShadow: 'none',
        }),
      },
    },
  },
  mixins: {
    // Default toolbar mixin
    toolbar: {},
    // New mixins
    gradientText: {
      background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: { xs: 6, md: 8 },
      fontSize: { xs: '2rem', md: '3rem' },
      fontWeight: 700,
      background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    hoverTransform: {
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
    glassEffect: {
      background: 'rgba(26, 26, 26, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
};

// Export theme
export default defaultTheme;
