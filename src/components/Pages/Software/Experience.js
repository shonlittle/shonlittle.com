/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Paper, alpha } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

// Add local dependencies.
import content from '../../../content/software.json';

// Array of experiences.
const experiences = content.experience;

/**
 * Experience component.
 * @example
 * return (
 *   <Experience />
 * )
 * @returns {React.ReactElement} component.
 */
const Experience = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: alpha('#1a1a1a', 0.5),
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography variant="sectionTitle" component="h2">
          Professional Journey
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 32, md: '50%' },
              transform: { md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #0066cc 0%, #00d4ff 100%)',
            }}
          />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <Box
              key={exp.id}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                mb: 6,
                flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 24, md: '50%' },
                  transform: { xs: 'none', md: 'translateX(-50%)' },
                  width: 16,
                  height: 16,
                  background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
                  borderRadius: '50%',
                  border: '4px solid #0a0a0a',
                  zIndex: 10,
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': {
                      boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
                    },
                    '50%': {
                      boxShadow: '0 0 20px rgba(0, 212, 255, 1), 0 0 30px rgba(0, 212, 255, 0.8)',
                    },
                  },
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  width: { xs: 'calc(100% - 64px)', md: '45%' },
                  ml: { xs: 8, md: 0 },
                  ...(index % 2 === 0 ? { mr: { md: 'auto' }, pr: { md: 4 } } : { ml: { md: 'auto' }, pl: { md: 4 } }),
                }}
              >
                <Paper
                  elevation={0}
                  variant="hover"
                  sx={{
                    p: 3,
                    animation: 'fadeInUp 0.6s ease forwards',
                    animationDelay: `${index * 0.3}s`,
                    opacity: 0,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {/* Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <AccessTime aria-hidden="true" sx={{ fontSize: '1rem', color: '#00d4ff' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#00d4ff',
                        fontWeight: 600,
                      }}
                    >
                      {exp.date}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="gradient"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: '1.25rem',
                    }}
                  >
                    {exp.title}
                  </Typography>

                  {/* Company */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fb923c',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {exp.company}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#b8b8b8',
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Experience;
