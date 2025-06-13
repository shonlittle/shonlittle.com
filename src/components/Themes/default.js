/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-06
 */

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
    },
    secondary: {
      main: '#00d4ff',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h2: {
      fontWeight: 700,
    },
    h5: {
      color: '#a0a0a0',
    },
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

        @keyframes typewriter {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 0; }
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
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: 'relative',
          textDecoration: 'none',
          '&:hover': {
            color: '#00d4ff',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -5,
            left: 0,
            width: 0,
            height: 2,
            background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
      },
    },
  },
};

// Export theme
export default defaultTheme;
