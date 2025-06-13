/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Paper, alpha } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

// Array of experiences.
const experiences = [
  {
    id: 'bcg-manager',
    date: '2023 - Present',
    title: 'Software Engineering Manager',
    company: 'Boston Consulting Group',
    description:
      'Leading cross-functional development teams to deliver innovative software solutions for Fortune 500 clients. Driving technical strategy and architecture decisions while mentoring junior developers and fostering a culture of continuous learning and excellence.',
  },
  {
    id: 'senior-engineer',
    date: '2020 - 2023',
    title: 'Senior Software Engineer',
    company: 'Tech Consulting Firm',
    description:
      'Architected and developed scalable web applications using modern JavaScript frameworks. Collaborated with stakeholders to translate business requirements into technical solutions and implemented best practices for code quality and testing.',
  },
  {
    id: 'fullstack-dev',
    date: '2018 - 2020',
    title: 'Full Stack Developer',
    company: 'Software Development Agency',
    description:
      'Built end-to-end web applications for diverse clients across multiple industries. Gained expertise in both frontend and backend technologies while working in an agile development environment.',
  },
];

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
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 8 },
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
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
                  sx={{
                    p: 3,
                    background: alpha('#1a1a1a', 0.7),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha('#ffffff', 0.1)}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    animation: 'fadeInUp 0.6s ease forwards',
                    animationDelay: `${index * 0.3}s`,
                    opacity: 0,
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
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 12px 24px ${alpha('#0066cc', 0.15)}`,
                      border: `1px solid ${alpha('#0066cc', 0.3)}`,
                    },
                  }}
                >
                  {/* Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <AccessTime sx={{ fontSize: '1rem', color: '#00d4ff' }} />
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
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      color: '#e0e0e0',
                      background: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
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
                      color: '#a0a0a0',
                      lineHeight: 1.6,
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: '#e0e0e0',
                      },
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
