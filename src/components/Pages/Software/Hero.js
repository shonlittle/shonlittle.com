/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useState } from 'react';
import { Box, Typography, alpha, useTheme, Container, Stack, Button } from '@mui/material';

// Add local dependencies.
import useNavigation from '../../../hooks/useNavigation';

// Array of code lines to display.
const codeLines = [
  'const softwareEngineer = {',
  "  name: 'Shon Little',",
  "  role: 'Software Engineering Manager',",
  "  company: 'Boston Consulting Group',",
  "  location: 'Los Angeles, CA',",
  "  passion: 'Building scalable solutions',",
  '};',
];

/**
 * Hero component.
 * @example
 * return (
 *   <Hero />
 * )
 * @returns {React.ReactElement} component.
 */
const Hero = () => {
  // Add state hook.
  const [, setIsMenuOpen] = useState(false);

  // Add scrollToSection custom hook.
  const { scrollToSection } = useNavigation(setIsMenuOpen);

  // Add theme hook.
  const theme = useTheme();

  // Render component.
  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: alpha(theme.palette.primary.main, 0.05),
        width: '100vw',
        maxWidth: '100%',
        padding: 0,
        margin: '0 auto',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
    >
      {/* Hero Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.3)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.3)} 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, ${alpha(theme.palette.primary.light, 0.2)} 0%, transparent 50%)
          `,
          animation: 'floatSimple 20s ease-in-out infinite',
        }}
      />

      {/* Code Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          fontFamily: 'monospace',
          fontSize: '14px',
          lineHeight: 1.5,
          color: theme.palette.primary.main,
          pointerEvents: 'none',
          overflow: 'hidden',
          p: 4,
        }}
      >
        {codeLines.map((line, index) => (
          <Typography
            key={line}
            component="div"
            sx={{
              fontFamily: 'monospace',
              fontSize: 'inherit',
              mb: 1,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              animation: 'typewriterSimple 20s steps(20, end) infinite',
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {line}
          </Typography>
        ))}
      </Box>

      {/* Hero Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <Typography
              variant="gradient"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                animation: 'fadeIn 0.8s ease forwards',
              }}
            >
              Shon Little
            </Typography>

            <Typography
              variant="h4"
              component="p"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                animation: 'fadeIn 0.8s ease forwards 0.5s',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              Senior Software Engineering Leader <br /> AI Platform Innovator <br /> Scalable Systems Architect
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                color: 'text.primary',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '900px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.2rem' },
                animation: 'fadeIn 0.8s ease forwards 1s',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              I build enterprise-scale AI platforms that transform industries. As a Senior Engineering Manager at BCG,
              I led global teams in designing and delivering solutions across generative AI, digital twins, and
              real-time analytics—driving measurable business outcomes for Fortune 500 clients. From
              Retrieval-Augmented Generation (RAG) chatbots to defect logging systems embedded in manufacturing AI
              suites, my work turns cutting-edge technology into scalable, market-ready products. I bring a deep focus
              on technical excellence, mentorship, and strategic alignment between engineering and business goals.
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{
                animation: 'fadeIn 0.8s ease forwards 1.5s',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              <Button
                variant="gradient"
                size="large"
                onClick={() => scrollToSection('projects')}
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                View My Work
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                Get In Touch
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// Export component.
export default Hero;
