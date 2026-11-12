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
    title: 'Languages & Frameworks',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'Java',
      'Golang',
      'SQL',
      'Rust (learning)',
      'React',
      'Next.js',
      'FastAPI',
      'Django REST Framework',
      'Node.js',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Agentic Systems',
    skills: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'Intelligent Agent Systems',
      'Multi-Agent Orchestration',
      'Model Context Protocol (MCP)',
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'LlamaIndex',
      'OpenAI API',
      'Pinecone',
      'ChromaDB',
      'Claude Code',
      'Voice AI',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CircleCI',
      'Azure DevOps',
      'Datadog',
      'Sentry',
    ],
  },
  {
    id: 'enterprise',
    title: 'Architecture & Data',
    skills: [
      'REST APIs',
      'GraphQL',
      'Microservices',
      'OAuth 2.0',
      'JWT',
      'Real-time Systems',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Snowflake',
    ],
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
      'Healthcare Platforms',
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
      'Agile & Scrum',
      'Cross-functional Teams',
      'Client Engagement',
      'Stakeholder Management',
      'MVP Development',
      'Mentorship',
      'Thought Leadership',
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
        backgroundColor: theme => alpha(theme.palette.background.paper, 0.5), // Dark background
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="sectionTitle" component="h2">
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
              variant="hover"
              sx={{
                height: '100%',
                p: 3,
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
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
                  color: 'secondary.main', // Cyan color for titles
                }}
              >
                {category.title}
              </Typography>

              {/* Skill Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map(skill => (
                  <Chip key={skill} label={skill} color="primary" variant="skill" size="small" />
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
