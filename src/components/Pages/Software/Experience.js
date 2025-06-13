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
    id: 'bcg-senior-manager',
    date: '2021 – 2025',
    title: 'Senior Software Engineering Manager',
    company: 'Boston Consulting Group (BCG X)',
    description:
      'Led global software engineering teams to deliver enterprise AI solutions across telecom, manufacturing, and healthcare. Directed product architecture, mentored engineers, and built scalable platforms using GenAI, cloud-native stacks, and modern development practices.',
  },
  {
    id: 'bcg-lead',
    date: '2011 – 2021',
    title: 'Lead Software Engineer',
    company: 'Boston Consulting Group (BCG Gamma)',
    description:
      'Architected and developed AI-powered enterprise applications for Fortune 500 clients. Delivered MVPs, scaled proprietary tools, and led Agile engineering teams on digital transformation initiatives in aviation, pharma, and logistics.',
  },
  {
    id: 'releve-director',
    date: '2007 – Present',
    title: 'Director of Software Engineering (Part-Time)',
    company: 'Relevé Studios',
    description:
      'Designed and maintained custom software systems for studio operations, including scheduling, billing, and CRM integrations. Applied full-stack engineering and cloud infrastructure to support business growth.',
  },
  {
    id: 'dsoa-coach',
    date: '2025 – Present',
    title: 'AI Expert Coach (Part-Time)',
    company: 'Dance Studio Owners Association',
    description:
      'Coach studio owners on practical AI adoption, creating custom toolkits and educational sessions to bridge the gap between emerging AI technologies and small business applications.',
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
