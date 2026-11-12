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
    id: 'galatiq-principal-fde',
    date: '2026 – Present',
    title: 'Principal Forward Deployed Engineer – AI Systems',
    company: 'Galatiq',
    description:
      'Lead end-to-end delivery of enterprise AI agents and applications, translating ambiguous business problems into production-grade LLM-powered systems. Architect agentic workflows, tool orchestration, and evaluation frameworks, explore voice and real-time AI solutions, and mentor engineers on forward-deployed delivery standards.',
  },
  {
    id: 'dsoa-coach',
    date: '2025 – 2026',
    title: 'AI Expert Coach (Part-Time)',
    company: 'Dance Studio Owners Association',
    description:
      'Led AI coaching sessions for 800+ small business owners, delivering practical AI education and adoption frameworks for non-technical audiences. Advised on emerging AI trends and integrated AI-assisted and automation tools into daily business workflows.',
  },
  {
    id: 'bcg-senior-manager',
    date: '2021 – 2025',
    title: 'Senior Software Engineering Manager',
    company: 'Boston Consulting Group (BCG X)',
    description:
      'Managed and mentored global engineering teams of 15+ delivering enterprise AI solutions across telecom, manufacturing, and healthcare. Served as Global Topic Lead for Rapid Prototyping, led system design reviews, and shipped production RAG chatbot agents, a drug repurposing analytics platform (~32% faster research turnaround), and defect logging automation for MFG.AI (50% less manual QA time).',
  },
  {
    id: 'bcg-lead',
    date: '2011 – 2021',
    title: 'Lead Software Engineer',
    company: 'Boston Consulting Group (BCG Gamma)',
    description:
      'Led Agile teams and established CI/CD pipelines and automated testing while delivering microservices-based automation platforms and real-time decision systems for Fortune 500 clients. Built airline disruption rerouting, AI-powered patent analytics, contract spend dashboards, and inventory automation that delivered millions in client savings.',
  },
  {
    id: 'releve-director',
    date: '2007 – Present',
    title: 'Director of Software Engineering (Part-Time)',
    company: 'Relevé Studios',
    description:
      'Designed and maintained custom software systems for studio operations, including scheduling, billing, and CRM integrations. Applied full-stack engineering and cloud infrastructure to support business growth.',
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
