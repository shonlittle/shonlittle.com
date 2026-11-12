/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { Download } from '@mui/icons-material';

// Add local dependencies.
import content from '../../../content/software.json';

// Contact content.
const { contact, person, resume } = content;

// Array of contact links with icons, labels, and URLs.
const contactLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: person.github,
    emoji: '📁',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: person.linkedin,
    emoji: '💼',
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
          variant="sectionTitle"
          component="h2"
          sx={{
            mb: { xs: 4, md: 6 },
          }}
        >
          {contact.title}
        </Typography>

        {/* Contact Content */}
        <Box sx={{ textAlign: 'center' }}>
          {/* Description */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: { xs: 4, md: 5 },
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
            {contact.intro}
          </Typography>

          {/* Résumé Download */}
          <Button
            component="a"
            href={resume.href}
            download={resume.fileName}
            variant="gradient"
            size="large"
            startIcon={<Download />}
            sx={{ px: 4, py: 1.5, mb: { xs: 4, md: 5 } }}
          >
            {resume.label}
          </Button>

          {/* Contact Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            sx={{ flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}
          >
            {contactLinks.map((link, index) => (
              <Button
                key={link.id}
                component="a"
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                variant="hover"
                size="large"
                startIcon={
                  <Box
                    aria-hidden="true"
                    sx={{
                      fontSize: '1.5rem',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    }}
                  >
                    {link.emoji}
                  </Box>
                }
                sx={{
                  px: 4,
                  py: 2,
                  minWidth: { xs: '200px', md: 'auto' },
                  color: '#e0e0e0',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  // Stagger animation delay
                  animation: 'fadeInUp 0.6s ease forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    color: '#00d4ff',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/email"
              variant="hover"
              size="large"
              startIcon={
                <Box
                  aria-hidden="true"
                  sx={{
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  }}
                >
                  ✉️
                </Box>
              }
              sx={{
                px: 4,
                py: 2,
                minWidth: { xs: '200px', md: 'auto' },
                color: '#e0e0e0',
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'none',
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${2 * 0.1}s`,
                opacity: 0,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  color: '#00d4ff',
                },
              }}
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Contact;
