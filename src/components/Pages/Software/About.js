/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Grid, Paper, alpha, Avatar, Stack, useTheme } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

/**
 * About component.
 * @example
 * return (
 *   <About />
 * )
 * @returns {React.ReactElement} component.
 */
const About = () => {
  // Add theme hook.
  const theme = useTheme();

  // Render component.
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        position: 'relative',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="sectionTitle" component="h2">
          About Me
        </Typography>

        {/* About Content */}
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Profile Image Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              {/* Gradient Background Effect */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  borderRadius: 4,
                  opacity: 0.2,
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />

              {/* Profile Card */}
              <Paper
                elevation={0}
                variant="hover"
                sx={{
                  position: 'relative',
                  background: alpha(theme.palette.background.paper, 0.7),
                  borderRadius: 4,
                  p: 4,
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                {/* Profile Avatar */}
                <Avatar
                  variant="hover"
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    fontSize: '4rem',
                    backgroundColor: theme.palette.grey[800],
                    border: `2px solid ${alpha(theme.palette.divider, 0.1)}`,
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  👨‍💻
                </Avatar>

                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    Los Angeles, CA
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* About Text Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: 'text.primary',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                As a former Software Engineering Manager at Boston Consulting Group, I architected and delivered
                transformative technology solutions for Fortune 500 clients across telecommunications, manufacturing,
                healthcare, and beyond. My expertise spans GenAI platforms, IoT ecosystems, enterprise APIs, and
                optimization algorithms.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: 'text.primary',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                I led engineering teams from rapid prototyping to production deployment, turning data science concepts
                into scalable systems that drove real business outcomes. Whether implementing DEEP.AI for customer
                management, building digital twins for manufacturing, or creating AI-powered inspection tools, I
                bridged the gap between cutting-edge research and practical solutions.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.7,
                  color: 'text.primary',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'text.secondary',
                  },
                }}
              >
                My approach blends technical depth with strategic thinking—understanding not just how to build
                something, but why it matters and how it fits into the broader business ecosystem. I&apos;m passionate
                about mentoring teams, fostering innovation, and delivering solutions that create lasting impact.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Export component.
export default About;
