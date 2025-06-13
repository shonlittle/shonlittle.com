/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Stack, Button, alpha } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

// Array of contact links with icons, labels, and URLs.
const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/shonlittle',
    icon: <GitHub sx={{ fontSize: '1.5rem' }} />,
    emoji: '📁',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shonlittle',
    icon: <LinkedIn sx={{ fontSize: '1.5rem' }} />,
    emoji: '💼',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:shon@example.com',
    icon: <Email sx={{ fontSize: '1.5rem' }} />,
    emoji: '✉️',
  },
];

/**
 * Contact component.
 * @example
 * return (
 *   <Contact />
 * )
 * @returns {React.ReactElement} component.
 */
const Contact = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let&apos;s Connect
        </Typography>

        {/* Contact Content */}
        <Box sx={{ textAlign: 'center' }}>
          {/* Description */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: { xs: 6, md: 8 },
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              color: '#e0e0e0',
              maxWidth: '600px',
              mx: 'auto',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#f0f0f0',
              },
            }}
          >
            I&apos;m always interested in discussing new opportunities, innovative projects, or simply connecting with
            fellow tech enthusiasts. Feel free to reach out through any of the channels below.
          </Typography>

          {/* Contact Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            sx={{ flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}
          >
            {contactLinks.map((contact, index) => (
              <Button
                key={contact.id}
                component="a"
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={
                  <Box
                    sx={{
                      fontSize: '1.5rem',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    }}
                  >
                    {contact.emoji}
                  </Box>
                }
                sx={{
                  px: 4,
                  py: 2,
                  minWidth: { xs: '200px', md: 'auto' },
                  background: alpha('#1a1a1a', 0.7),
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#ffffff', 0.1)}`,
                  borderRadius: 4,
                  color: '#e0e0e0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  // Stagger animation delay
                  animation: 'fadeInUp 0.6s ease forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    border: `1px solid ${alpha('#0066cc', 0.5)}`,
                    backgroundColor: alpha('#1a1a1a', 0.9),
                    color: '#00d4ff',
                    boxShadow: `0 8px 24px ${alpha('#0066cc', 0.2)}`,
                  },
                  '@keyframes fadeInUp': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(30px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                {contact.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Contact;
