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
      "Led the deployment of BCG's generative AI customer management platform for telecom and B2B clients. Boosted upselling and retention using Retrieval-Augmented Generation (RAG), real-time customer analytics, and LLM-driven insights.",
    technologies: ['RAG', 'Generative AI', 'LangChain', 'OpenAI API', 'Customer Analytics'],
    links: [
      { label: 'Case Study', href: '#' },
      { label: 'Technical Details', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)',
  },
  {
    id: 'factory-future',
    emoji: '🏭',
    title: 'Factory of the Future – MFG.AI',
    description:
      'Modernized operations at JBT and Cargill Salt with IoT sensors, digital twins, and AI-powered defect logging. Integrated edge computing with GCP-hosted FastAPI services and React dashboards for predictive maintenance and analytics.',
    technologies: ['Digital Twin', 'Edge Computing', 'IoT', 'FastAPI', 'GCP'],
    links: [
      { label: 'Architecture', href: '#' },
      { label: 'Impact Report', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #0066cc 100%)',
  },
  {
    id: 'drug-ai',
    emoji: '💊',
    title: 'DRUG.AI – Pharma Discovery Platform',
    description:
      'Designed and deployed an AI-powered analytics tool for drug repurposing. Used graph traversal, NLP, and real-time filters to reveal gene-disease relationships, accelerating pharma research across enterprise and academic users.',
    technologies: ['AI/ML', 'Bioinformatics', 'Graph Analytics', 'Spring Boot', 'PostgreSQL'],
    links: [
      { label: 'Research Paper', href: '#' },
      { label: 'Demo', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
  },
  {
    id: 'airline-optimization',
    emoji: '✈️',
    title: 'Airline Disruption Optimization Engine',
    description:
      'Built a real-time rerouting engine for a major EU airline to handle flight disruptions. Delivered a working MVP in under a week using Python, D3.js, and optimization algorithms—mitigating losses during high-impact operational events.',
    technologies: ['Python', 'D3.js', 'Optimization Algorithms', 'Real-time Systems', 'Azure'],
    links: [
      { label: 'Algorithm Details', href: '#' },
      { label: 'Case Study', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #4ade80 0%, #10b981 100%)',
  },
  {
    id: 'manufacturing-api',
    emoji: '🔌',
    title: 'Real-time Manufacturing API Suite',
    description:
      'Led architecture and development of reusable microservices for manufacturing workflows. Designed scalable, low-latency APIs with FastAPI and PostgreSQL, integrated into BCG’s MFG.AI suite to support global deployment.',
    technologies: ['FastAPI', 'PostgreSQL', 'Microservices', 'Kubernetes', 'CI/CD'],
    links: [
      { label: 'API Docs', href: '#' },
      { label: 'Engineering Overview', href: '#' },
    ],
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4f46e5 100%)',
  },
  {
    id: 'inspection-tools',
    emoji: '🔍',
    title: 'AI-Powered Inspection Tools',
    description:
      'Created geospatial mobile apps with predictive AI to support nonprofit enforcement efforts. Enabled smarter deployment of field resources using location clustering, visual overlays, and mobile-first design.',
    technologies: ['Geospatial Analysis', 'Predictive AI', 'React', 'Mapbox', 'PostgreSQL'],
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
