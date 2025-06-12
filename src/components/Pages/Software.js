/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Box, Container, Link, useScrollTrigger, Slide } from '@mui/material';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navigation = () => {
  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          paddingY: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Typography
            variant="h6"
            sx={{
              background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Shon Little
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                underline="none"
                color="inherit"
                sx={{
                  position: 'relative',
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
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

const CodeOverlay = () => {
  const codeLines = [
    'const softwareEngineer = {',
    "  name: 'Shon Little',",
    "  role: 'Software Engineering Manager',",
    "  company: 'Boston Consulting Group',",
    "  location: 'Los Angeles, CA',",
    "  passion: 'Building scalable solutions',",
    '};',
  ];
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.1,
        fontFamily: 'Courier New, monospace',
        fontSize: 14,
        lineHeight: 1.5,
        color: '#0066cc',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {codeLines.map((line, i) => (
        <Box
          key={line}
          sx={{
            margin: '0.5rem 1rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            animation: 'typewriter 20s linear infinite',
            animationDelay: `${i * 0.5}s`,
            animationFillMode: 'both',
          }}
        >
          {line}
        </Box>
      ))}
    </Box>
  );
};

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
          radial-gradient(circle at 20% 50%, rgba(0, 102, 204, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(255, 107, 53, 0.2) 0%, transparent 50%)
        `,
          animation: 'float 20s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <CodeOverlay />
      <Container sx={{ textAlign: 'center', zIndex: 2, maxWidth: 800 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Shon Little
        </Typography>
        <Typography variant="h5" sx={{ color: '#a0a0a0', mb: 3 }}>
          Software Engineering Manager
        </Typography>
        <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 4 }}>
          Building next-generation AI and IoT solutions at Boston Consulting Group. From GenAI platforms transforming
          customer experiences to digital twins revolutionizing manufacturing - I lead teams that turn cutting-edge
          technology into measurable business impact.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            sx={{ borderRadius: 5, px: 4, background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)' }}
            href="#projects"
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: 5, px: 4, borderColor: '#0066cc', color: '#e0e0e0' }}
            href="#contact"
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const Portfolio = () => {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portfolio;
