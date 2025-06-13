/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip, Avatar } from '@mui/material';
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
    gradient: 'primary',
  },
  {
    id: 'mfg-ai',
    emoji: '🏭',
    title: 'Factory of the Future – MFG.AI',
    description:
      'Modernized operations at JBT and Cargill Salt with IoT sensors, digital twins, and AI-powered defect logging. Integrated edge computing with GCP-hosted FastAPI services and React dashboards for predictive maintenance and analytics.',
    technologies: ['Digital Twin', 'Edge Computing', 'IoT', 'FastAPI', 'GCP'],
    links: [
      { label: 'Architecture', href: '#' },
      { label: 'Impact Report', href: '#' },
    ],
    gradient: 'secondary',
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
    gradient: 'orange',
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
    gradient: 'green',
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
    gradient: 'purple',
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
    gradient: 'pink',
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
        <Typography variant="sectionTitle" component="h2">
          Featured Projects
        </Typography>

        {/* Director.exe Video Collection */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontWeight: 600,
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Director.exe - AI Film Project
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            A fully AI-crafted narrative comedy about an artificial director losing control of its own dramatic
            masterpiece. Built using a suite of generative tools including ChatGPT, Runway, Leonardo.ai, ElevenLabs,
            and Suno. This project showcases my ability to integrate cutting-edge AI technologies across storytelling,
            media production, and user experience — with a healthy dose of humor and glitch.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 3, md: 4 },
              mb: 4,
            }}
          >
            {/* Trailer */}
            <Card
              elevation={0}
              variant="hover"
              sx={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/OfLvQSROk1M"
                  title="Director.exe Trailer"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  🎬 Trailer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get a glimpse of the AI director&apos;s chaotic journey
                </Typography>
              </CardContent>
            </Card>

            {/* Main Film */}
            <Card
              elevation={0}
              variant="hover"
              sx={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/U3JAt9uH7zE"
                  title="Director.exe Short Film"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  🎭 Full Film
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The complete AI-generated narrative comedy
                </Typography>
              </CardContent>
            </Card>

            {/* Blooper Reel */}
            <Card
              elevation={0}
              variant="hover"
              sx={{
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="iframe"
                  src="https://www.youtube.com/embed/kVoPYgHj6Oc"
                  title="Director.exe Blooper Reel"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  😂 Bloopers
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Behind-the-scenes AI glitches and outtakes
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Technology Stack for this project */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              AI Tools Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {['ChatGPT', 'Runway', 'Leonardo.ai', 'ElevenLabs', 'Suno'].map(tool => (
                <Chip
                  key={tool}
                  label={tool}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{
                    fontSize: '0.75rem',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Typography variant="sectionTitle" component="h2">
          Software Projects
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
              variant="hover"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              {/* Project Image/Icon */}
              <Box
                sx={theme => ({
                  height: 200,
                  background: theme.palette.gradients[project.gradient],
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
                })}
              >
                <Avatar
                  variant="hover"
                  sx={theme => ({
                    width: 64,
                    height: 64,
                    fontSize: '2rem',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    zIndex: 1,
                    ...theme.mixins.hoverTransform,
                    '&:hover': {
                      ...theme.mixins.hoverTransform['&:hover'],
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                  })}
                >
                  {project.emoji}
                </Avatar>
              </Box>

              {/* Project Content */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={theme => ({
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                  })}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={theme => ({
                    mb: 3,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  })}
                >
                  {project.description}
                </Typography>

                {/* Technology Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {project.technologies.map(tech => (
                    <Chip
                      key={tech}
                      label={tech}
                      color="secondary"
                      variant="skill"
                      size="small"
                      sx={{
                        fontSize: '0.75rem',
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
                        fontSize: '0.875rem',
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
