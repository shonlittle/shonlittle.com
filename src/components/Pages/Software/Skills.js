/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Paper, Chip, alpha } from '@mui/material';

// Array of skill categories and skills.
const skillCategories = [
  {
    id: 'programming',
    title: 'Programming & Platforms',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'VBA'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: ['Generative AI', 'Machine Learning', 'Predictive Analytics', 'Computer Vision', 'NLP', 'Bioinformatics'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    skills: ['Azure', 'Event Grid', 'Cosmos DB', 'IoT Hub', 'Docker', 'MQTT'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Integration',
    skills: ['Oracle', 'Vendavo', 'REST APIs', 'AMQP', 'Real-time Systems', 'High Availability'],
  },
  {
    id: 'specialized',
    title: 'Specialized Domains',
    skills: [
      'Digital Twins',
      'Edge Computing',
      'Optimization Algorithms',
      'Geospatial Analysis',
      'Manufacturing Systems',
      'Telecommunications',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Strategy',
    skills: [
      'Technical Leadership',
      'Solution Architecture',
      'Rapid Prototyping',
      'Cross-functional Teams',
      'Client Engagement',
      'MVP Development',
    ],
  },
];

/**
 * Skills component.
 * @example
 * return (
 *   <Skills />
 * )
 * @returns {React.ReactElement} component.
 */
const Skills = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: alpha('#1a1a1a', 0.5), // Dark background
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
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
          Technical Expertise
        </Typography>

        {/* Skills Grid - Force 2x3 layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on mobile
              md: 'repeat(3, 1fr)', // 3 columns on desktop
            },
            gridTemplateRows: {
              md: 'repeat(2, 1fr)', // 2 rows on desktop
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <Paper
              key={category.id}
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                background: alpha('#1a1a1a', 0.7),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha('#ffffff', 0.1)}`,
                borderRadius: 3,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 12px 24px ${alpha('#0066cc', 0.15)}`,
                  border: `1px solid ${alpha('#0066cc', 0.5)}`,
                },
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 0.1}s`,
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
              }}
            >
              {/* Category Title */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 2,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#00d4ff', // Cyan color for titles
                }}
              >
                {category.title}
              </Typography>

              {/* Skill Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    size="small"
                    sx={{
                      backgroundColor: alpha('#0066cc', 0.2), // Blue background
                      borderColor: alpha('#0066cc', 0.3), // Blue border
                      color: '#60a5fa', // Light blue text
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: alpha('#0066cc', 0.3),
                        borderColor: '#0066cc',
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Skills;
