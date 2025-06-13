/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  alpha,
} from '@mui/material';
import { Launch, Code } from '@mui/icons-material';

// Array of projects with details.
const projects = [
  {
    id: 'deep-ai',
    emoji: '🤖',
    title: 'DEEP.AI Platform Implementation',
    description:
      "Led the deployment of BCG's GenAI-powered customer management platform for major telecom providers and B2B companies. Enhanced upselling, reduced churn, and transformed digital customer interactions with real-time AI insights.",
    technologies: ['GenAI', 'Machine Learning', 'Customer Analytics', 'Real-time Processing'],
    links: [
      { label: 'Case Study', href: '#' },
      { label: 'Technical Details', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
  },
  {
    id: 'factory-future',
    emoji: '🏭',
    title: 'Factory of the Future - IoT & Digital Twin',
    description:
      'Modernized manufacturing operations for JBT and Cargill Salt using IoT sensors, digital twins, and edge computing. Built high-volume data ingestion systems with MQTT, Azure Event Grid, and real-time dashboards for predictive maintenance.',
    technologies: ['IoT', 'Digital Twin', 'Azure', 'MQTT', 'Edge Computing'],
    links: [
      { label: 'Architecture', href: '#' },
      { label: 'Impact Report', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0066cc 100%)',
  },
  {
    id: 'drug-ai',
    emoji: '💊',
    title: 'DRUG.AI - Pharma Discovery Platform',
    description:
      'Built an AI-powered tool that analyzes gene-disease relationships to suggest new uses for existing drugs. Transformed data science prototypes into production-ready systems, accelerating hypothesis generation in pharmaceutical discovery.',
    technologies: ['AI/ML', 'Bioinformatics', 'Data Science', 'Production APIs'],
    links: [
      { label: 'Research Paper', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
  },
  {
    id: 'airline-optimization',
    emoji: '✈️',
    title: 'Airline Flight Rerouting Optimization',
    description:
      'Developed a real-time flight rerouting optimization engine for major EU airline disruptions. Went from concept to functional prototype in days, helping avoid substantial revenue loss during operational crises.',
    technologies: ['Optimization Algorithms', 'Real-time Systems', 'Aviation', 'Rapid Prototyping'],
    links: [
      { label: 'Algorithm Details', href: '#' },
      { label: 'Case Study', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)',
  },
  {
    id: 'industrial-api',
    emoji: '💰',
    title: 'Industrial Automation API',
    description:
      'Led development of a mission-critical pricing API for industrial energy solutions. Integrated with Oracle and Vendavo for real-time pricing guidance, designed for high availability and low latency.',
    technologies: ['REST APIs', 'Oracle Integration', 'High Availability', 'Enterprise Systems'],
    links: [
      { label: 'API Documentation', href: '#' },
      { label: 'Performance Metrics', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%)',
  },
  {
    id: 'inspection-tools',
    emoji: '🔍',
    title: 'AI-Powered Inspection Tools',
    description:
      'Developed mobile inspection applications using AI and geospatial analysis for nonprofit enforcement teams. Built predictive models to optimize inspection targeting, resulting in more efficient and impactful operations.',
    technologies: ['Mobile Development', 'Geospatial Analysis', 'Predictive AI', 'Public Safety'],
    links: [
      { label: 'Impact Metrics', href: '#' },
      { label: 'Technical Overview', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
  },
];

/**
 * Handle project action.
 * @param {string} action - The action to perform.
 * @param {string} projectId - The ID of the project.
 */
const handleProjectAction = (action, projectId) => {
  console.log(`${action} action for project: ${projectId}`);
};

/**
 * Projects component.
 * @example
 * return (
 *   <Projects />
 * )
 * @returns {React.ReactElement} component.
 */
const Projects = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
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
          Featured Projects
        </Typography>

        {/* Projects Grid - Force 3 columns layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on mobile
              md: 'repeat(2, 1fr)', // 2 columns on tablet
              lg: 'repeat(3, 1fr)', // 3 columns on desktop
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1400px',
            mx: 'auto',
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: alpha('#1a1a1a', 0.7),
                backdropFilter: 'blur(10px)',
                border: `1px solid ${alpha('#ffffff', 0.1)}`,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px ${alpha('#0066cc', 0.2)}`,
                  border: `1px solid ${alpha('#0066cc', 0.5)}`,
                },
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 0.2}s`,
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
              {/* Project Image/Icon */}
              <Box
                sx={{
                  height: 200,
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    fontSize: '2rem',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  }}
                >
                  {project.emoji}
                </Avatar>
              </Box>

              {/* Project Content */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#e0e0e0',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#00d4ff',
                    },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technology Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {project.technologies.map(tech => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: alpha('#f97316', 0.2),
                        borderColor: alpha('#f97316', 0.3),
                        color: '#fb923c',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        border: `1px solid ${alpha('#f97316', 0.3)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: alpha('#f97316', 0.3),
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              {/* Project Links */}
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={link.label}
                      size="small"
                      variant="outlined"
                      startIcon={linkIndex === 0 ? <Launch /> : <Code />}
                      onClick={() => handleProjectAction(link.label.toLowerCase(), project.id)}
                      sx={{
                        flex: 1,
                        borderColor: '#0066cc',
                        color: '#60a5fa',
                        fontSize: '0.875rem',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: alpha('#0066cc', 0.1),
                          borderColor: '#0066cc',
                          transform: 'translateY(-1px)',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Projects;
