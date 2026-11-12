/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Typography, Card, CardContent, CardActions, Button, Chip, Collapse } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

// Add local dependencies.
import deep from '../../../assets/images/deep.png';
import mfg from '../../../assets/images/mfg.png';
import drug from '../../../assets/images/drug.png';
import airline from '../../../assets/images/airline.png';
import dashboard from '../../../assets/images/dashboard.png';
import inspection from '../../../assets/images/inspection.png';
import content from '../../../content/software.json';

// Project images, keyed by the `image` field in the content file.
const images = { deep, mfg, drug, airline, dashboard, inspection };

// Array of projects with details.
const { projects } = content;

// Shared style for the small labels inside a case study.
const caseStudyLabelSx = {
  color: 'secondary.main',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  mb: 0.5,
};

// Shared style for the body text inside a case study.
const caseStudyTextSx = {
  color: 'text.secondary',
  lineHeight: 1.6,
  mb: 2,
};

/**
 * ProjectCard component.
 * @param {Object} props - Component properties.
 * @param {Object} props.project - Project to render.
 * @param {number} props.index - Position of the card, used to stagger the animation.
 * @returns {React.ReactElement} component.
 */
const ProjectCard = ({ project, index }) => {
  // Add state hook for the expandable case study.
  const [isOpen, setIsOpen] = useState(false);

  // Set identifiers that tie the toggle button to the case study region.
  const titleId = `project-${project.id}-title`;
  const caseStudyId = `project-${project.id}-case-study`;
  const image = project.image ? images[project.image] : null;

  // Render component.
  return (
    <Card
      component="article"
      aria-labelledby={titleId}
      elevation={0}
      variant="hover"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        // Stagger animation delay
        animation: 'fadeInUp 0.6s ease forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      {/* Project Image, or a gradient panel when there is no image */}
      <Box sx={{ height: 200, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        {image ? (
          <Box
            component="img"
            src={image}
            alt=""
            width={361}
            height={200}
            loading="lazy"
            decoding="async"
            sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <Box
            aria-hidden="true"
            sx={theme => ({
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${theme.palette.gradients[project.gradient] ?? theme.palette.gradients.primary}`,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.18) 0%, rgba(10, 10, 10, 0.55) 70%)',
              },
            })}
          >
            <Typography
              component="span"
              sx={{
                position: 'relative',
                zIndex: 1,
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '0.04em',
                textAlign: 'center',
                px: 2,
              }}
            >
              {project.panelLabel}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Project Content */}
      <CardContent sx={{ flexGrow: 1, p: 3, pb: 1 }}>
        {/* Client or industry context */}
        <Typography
          component="p"
          sx={{
            color: '#fb923c',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          {project.context}
        </Typography>

        <Typography id={titleId} variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
          {project.title}
        </Typography>

        {/* Outcome: a headline metric when there is one, otherwise a short outcome line */}
        {project.metric ? (
          <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', columnGap: 1.5, mb: 2 }}>
            <Typography
              variant="gradient"
              component="span"
              sx={{ fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.1, whiteSpace: 'nowrap' }}
            >
              {project.metric.value}
            </Typography>
            <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '0.95rem' }}>
              {project.metric.label}
            </Typography>
          </Box>
        ) : (
          <Typography
            component="p"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              fontSize: '0.95rem',
              borderLeft: '3px solid',
              borderColor: 'secondary.main',
              pl: 1.5,
              mb: 2,
            }}
          >
            {project.outcome}
          </Typography>
        )}

        <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary', lineHeight: 1.6 }}>
          {project.summary}
        </Typography>

        {/* Technology Tags */}
        <Box
          component="ul"
          aria-label="Key technologies"
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, listStyle: 'none' }}
        >
          {project.technologies.map(tech => (
            <Box component="li" key={tech}>
              <Chip label={tech} color="secondary" variant="skill" size="small" sx={{ fontSize: '0.75rem' }} />
            </Box>
          ))}
        </Box>
      </CardContent>

      {/* Case Study Toggle */}
      <CardActions sx={{ px: 3, pb: 2, pt: 1 }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => setIsOpen(open => !open)}
          aria-expanded={isOpen}
          aria-controls={caseStudyId}
          endIcon={
            <ExpandMore sx={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
          }
          sx={{ fontSize: '0.875rem' }}
        >
          {isOpen ? 'Hide case study' : 'View case study'}
        </Button>
      </CardActions>

      {/* Case Study */}
      <Collapse in={isOpen} timeout="auto">
        <Box
          id={caseStudyId}
          role="region"
          aria-label={`${project.title} case study`}
          sx={{ px: 3, pb: 3, pt: 1, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <Typography component="h4" sx={{ ...caseStudyLabelSx, mt: 2 }}>
            Business challenge
          </Typography>
          <Typography variant="body2" sx={caseStudyTextSx}>
            {project.challenge}
          </Typography>

          <Typography component="h4" sx={caseStudyLabelSx}>
            My role
          </Typography>
          <Typography variant="body2" sx={caseStudyTextSx}>
            {project.role}
          </Typography>

          <Typography component="h4" sx={caseStudyLabelSx}>
            Solution
          </Typography>
          <Box component="ul" sx={{ ...caseStudyTextSx, pl: 2.5 }}>
            {project.solution.map(item => (
              <Typography component="li" variant="body2" key={item} sx={{ lineHeight: 1.6, mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Box>

          <Typography component="h4" sx={caseStudyLabelSx}>
            Result
          </Typography>
          <Typography variant="body2" sx={{ ...caseStudyTextSx, color: 'text.primary', mb: 0 }}>
            {project.result}
          </Typography>
        </Box>
      </Collapse>
    </Card>
  );
};

// Set component property types.
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    panelLabel: PropTypes.string,
    gradient: PropTypes.string,
    title: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    metric: PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    outcome: PropTypes.string,
    summary: PropTypes.string.isRequired,
    challenge: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    solution: PropTypes.arrayOf(PropTypes.string).isRequired,
    result: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
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
        <Typography variant="sectionTitle" component="h2" sx={{ mb: 2 }}>
          Featured Projects
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'text.secondary', maxWidth: '720px', mx: 'auto', mb: { xs: 5, md: 7 } }}
        >
          Enterprise AI and software engineering work I helped architect, build, and deliver. Client names and
          proprietary details are left out on purpose.
        </Typography>

        {/* Projects Grid */}
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Projects;
